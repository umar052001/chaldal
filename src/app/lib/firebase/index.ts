import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, push, set } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes as storageUploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBvKfuxpA6ecz3eOBMfzDr6BxVMHgfTicc",
  authDomain: "chaldal-dbaa5.firebaseapp.com",
  databaseURL: "https://chaldal-dbaa5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chaldal-dbaa5",
  storageBucket: "chaldal-dbaa5.appspot.com",
  messagingSenderId: "763517665848",
  appId: "1:763517665848:web:a7da6316b8435f6e971ccd",
  measurementId: "G-6386Y0VYJY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);

// Function to create a new category node in Firebase Realtime Database
export async function createCategory(categoryName: string, categoryDescription: string, categoryImage: File): Promise<any> {
  const categoriesRef = ref(database, "categories");
  const newCategoryRef = push(categoriesRef);

  // Upload category image to Firebase Storage
  const imageRef = storageRef(storage, `categoryImages/${newCategoryRef.key}`);
  await storageUploadBytes(imageRef, categoryImage);

  // Get the download URL of the uploaded image
  const imageUrl = await getDownloadURL(imageRef);

  // Create category data object
  const categoryData = {
    name: categoryName,
    description: categoryDescription,
    image: imageUrl,
  };

  await set(newCategoryRef, categoryData);

  return newCategoryRef.key;
}

// Function to create a new subcategory node in Firebase Realtime Database
export async function createSubcategory(subcategoryName: string, subcategoryImage: File, categoryId: string): Promise<any> {
  const subcategoriesRef = ref(database, `categories/${categoryId}/subcategories`);
  const newSubcategoryRef = push(subcategoriesRef);

  // Upload subcategory image to Firebase Storage
  const imageRef = storageRef(storage, `subcategoryImages/${newSubcategoryRef.key}`);
  await storageUploadBytes(imageRef, subcategoryImage);

  // Get the download URL of the uploaded image
  const imageUrl = await getDownloadURL(imageRef);

  // Create subcategory data object
  const subcategoryData = {
    name: subcategoryName,
    image: imageUrl,
  };

  await set(newSubcategoryRef, subcategoryData);

  return newSubcategoryRef.key;
}

// Function to create a new item node in Firebase Realtime Database
export async function createItem(itemName: string, itemPrice: string, itemImage: File, subcategoryId: string): Promise<any> {
  const itemsRef = ref(database, `subcategories/${subcategoryId}/items`);
  const newItemRef = push(itemsRef);

  // Upload item image to Firebase Storage
  const imageRef = storageRef(storage, `itemImages/${newItemRef.key}`);
  await storageUploadBytes(imageRef, itemImage);

  // Get the download URL of the uploaded image
  const imageUrl = await getDownloadURL(imageRef);

  // Create item data object
  const itemData = {
    name: itemName,
    price: itemPrice,
    image: imageUrl,
  };

  await set(newItemRef, itemData);

  return newItemRef.key;
}
