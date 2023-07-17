import { createCategory, createSubcategory, createItem } from './index';
import { expect } from '@jest/globals';
import mockfs from 'mock-fs';

describe('Firebase functions', () => {
  beforeAll(() => {
    // Mock the file system
    mockfs({
      'test.png': 'content of test.png'
    });
  });

  afterAll(() => {
    // Restore the file system
    mockfs.restore();
  });
  let categoryId: string;
  let subcategoryId: string;
  let itemId: string;

  test('createCategory should create a new category document in Firestore', async () => {
    const categoryName = 'Test Category';
    const categoryDescription = 'This is a test category';
    const categoryImage = {
      name: 'test.png',
      type: 'image/png'
    };

    categoryId = await createCategory(categoryName, categoryDescription, categoryImage);

    expect(categoryId).toBeTruthy();
  });

  test('createSubcategory should create a new subcategory document in Firestore', async () => {
    const subcategoryName = 'Test Subcategory';
    const subcategoryImage = {
      name: 'test.png',
      type: 'image/png'
    };

    subcategoryId = await createSubcategory(subcategoryName, subcategoryImage, categoryId);

    expect(subcategoryId).toBeTruthy();
  });

  test('createItem should create a new item document in Firestore', async () => {
    const itemName = 'Test Item';
    const itemPrice = '10.99';
    const itemImage = {
      name: 'test.png',
      type: 'image/png'
    };

    itemId = await createItem(itemName, itemPrice, itemImage, subcategoryId);

    expect(itemId).toBeTruthy();
  });
});
