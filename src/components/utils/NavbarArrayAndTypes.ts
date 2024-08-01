export interface NavbarItemType {
  label: string;
  href: string;
  isDropDown: boolean;
  dropDownData?: Array<NavbarItemType>;
}

export const NavbarArray: Array<NavbarItemType> = [
  {
    label: "Home",
    href: "/",
    isDropDown: false,
  },
  {
    label: "Female",
    href: "/female/Female",
    isDropDown: false,
    dropDownData: [
      {
        label: "Sweaters",
        href: "/female/Sweater",
        isDropDown: false,
      },
      {
        label: "Dresses",
        href: "/female/Dress",
        isDropDown: false,
      },
      {
        label: "T-Shirts",
        href: "/female/T-shirt",
        isDropDown: false,
      },
      {
        label: "Pants",
        href: "/female/Pant",
        isDropDown: false,
      },
    ],
  },
  {
    label: "Male",
    href: "/male/Male",
    isDropDown: false,
    dropDownData: [
      {
        label: "Sweaters",
        href: "/male/Sweater",
        isDropDown: false,
      },
      {
        label: "Jackets",
        href: "/male/Jacket",
        isDropDown: false,
      },
      {
        label: "T-Shirts",
        href: "/male/T-Shirt",
        isDropDown: false,
      },
      {
        label: "Pants",
        href: "/male/Pant",
        isDropDown: false,
      },
    ],
  },
  {
    label: "Kids",
    href: "/kid",
    isDropDown: false,
  },
];
