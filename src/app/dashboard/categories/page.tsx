"use client"

import CustomLink from "@/components/CustomLink/customLink";
import Table from "@/components/table/CatTable.component";
import AddCatModal from "@/components/modal/AddCatModal.component";

const Management = () => {
    const handleAddCat=()=>{
        // TODO Add Category into the firebase
        console.log("added")
    }
    return (
        <div className="relative z-0">
            <div className="flex flex-col sm:flex-row content-center flex-wrap gap-2 sm:justify-between p-4">
                <CustomLink/>
                <AddCatModal handleCat={handleAddCat} titleText={"Add"} />
            </div>
            <h2 className="font-bold text-center text-2xl my-4">Categories</h2>
            <Table EditComponent={AddCatModal}/>
        </div>
    );
};

export default Management;