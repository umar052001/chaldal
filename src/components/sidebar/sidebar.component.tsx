"use client"
import { useAtom } from "jotai";
import { isDrawerOpenAtom } from "@/app/lib/context/dashboardAtoms";
import DrawerOption from "../drawerOption/drawerOption.component";

const Drawer = () => {
  const [isDrawerOpen] = useAtom(isDrawerOpenAtom)
  const drawerOptions = [
    {
      optionName: "Home",
      id: 1,
      optionIconUrl: "/static/icons/home.svg",
      optionRoute: "/dashboard"
    },
    {
      optionName: "Orders",
      id: 2,
      optionIconUrl: "/static/icons/cart.png",
      optionRoute: "/dashboard/orders"
    },
    {
      optionName:"Categories",
      id:3,
      optionIconUrl:"/static/icons/home.svg",
      optionRoute:"",
      subOptions:[
        {
          id:1,
          subOptionTitle:"Manage Categories",
          subOptionIconUrl:"/static/icons/home.svg",
          subOptionRoute:"/dashboard/categories",
        },
        {
          id:2,
          subOptionTitle:"Manage Sub Categories",
          subOptionIconUrl:"/static/icons/home.svg",
          subOptionRoute:"/dashboard/subCategories",
        }
      ]
    },
    {
      optionName: "Option 2",
      id: 4,
      optionIconUrl: "/static/icons/home.svg",
      optionRoute: "/dashboard",
      subOptions: [
        {
          id: 1,
          subOptionTitle: "subOption 1",
          subOptionIconUrl: "/static/icons/home.svg",
          subOptionRoute: "/dashboard",
        }
      ]
    }
  ]
  return (
    <>
      <div className={`bg-[var(--secondary-90)] fixed ${isDrawerOpen ? "left-0 top-0" : "left-[-208px] top-0"} h-[100vh] z-10 w-52 pt-16 inline-block transition-all duration-300`}>

        {
          drawerOptions.map((drawerItem) => {
            return <DrawerOption key={drawerItem.id} title={drawerItem.optionName} mainIcon={drawerItem.optionIconUrl} optionRoute={drawerItem.optionRoute} subOptions={drawerItem.subOptions}
            />
          })
        }
      </div>
    </>
  );
};

export default Drawer;