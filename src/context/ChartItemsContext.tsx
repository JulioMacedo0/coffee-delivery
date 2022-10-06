import { createContext, ReactNode, useEffect, useState } from "react";

interface ChartItemsContextProps {
  children: ReactNode;
}
interface ChartItemType {
  id: number;
  name: string;
  img: string;
  price: string;
  amount: number;
}

interface ChartItemsContextType {
  itemsChart: ChartItemType[];
  handleAddProduct: (
    id: number,
    name: string,
    img: string,
    price: string
  ) => void;
  handleDecreaseProduct: (id: number) => void;
  handleDeleteProduct: (id: number) => void;
  onChangeSetScreet: (street: string) => void;
  onChangeSetHouseNumber: (houseNumber: string) => void;
  onChangeSetCity: (city: string) => void;
  onChangeSetState: (state: string) => void;
  handleChangePaymentSlected: (payment: string) => void;
  paymentSelected: string;
  street: string;
  houseNumber: string;
  city: string;
  state: string;
}

export const ChartItemsContext = createContext({} as ChartItemsContextType);

export function ChartItemsContextProvider({
  children,
}: ChartItemsContextProps) {
  const [itemsChart, setItemsChart] = useState<ChartItemType[]>([]);
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [paymentSelected, setPaymentSeletected] = useState("");

  function onChangeSetScreet(street: string) {
    setStreet(street);
  }

  function onChangeSetHouseNumber(houseNumber: string) {
    setHouseNumber(houseNumber);
  }

  function onChangeSetCity(city: string) {
    setCity(city);
  }

  function onChangeSetState(state: string) {
    setState(state);
  }

  function handleChangePaymentSlected(payment: string) {
    setPaymentSeletected(payment);
    console.log(payment);
  }

  useEffect(() => {
    const StotredItems = localStorage.getItem(
      "@coffe-delivery:chart-items1.0.0"
    );

    if (StotredItems) {
      setItemsChart(JSON.parse(StotredItems));
    }
  }, []);

  function handleAddProduct(
    id: number,
    name: string,
    img: string,
    price: string
  ) {
    const existProduct = itemsChart.find((item) => item.id == id);

    if (existProduct) {
      const newItems = itemsChart.map((item) => {
        if (item.id == id) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      });
      localStorage.setItem(
        "@coffe-delivery:chart-items1.0.0",
        JSON.stringify(newItems)
      );
      setItemsChart(newItems);
    } else {
      const newItems = [...itemsChart, { id, name, img, price, amount: 1 }];
      localStorage.setItem(
        "@coffe-delivery:chart-items1.0.0",
        JSON.stringify(newItems)
      );
      setItemsChart(newItems);
    }
  }

  function handleDecreaseProduct(id: number) {
    const newItems = itemsChart
      .map((item) => {
        if (item.id == id) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      })
      .filter((item) => item.amount > 0);
    localStorage.setItem(
      "@coffe-delivery:chart-items1.0.0",
      JSON.stringify(newItems)
    );
    setItemsChart(newItems);
  }

  function handleDeleteProduct(id: number) {
    const newItems = itemsChart.filter((item) => item.id != id);
    localStorage.setItem(
      "@coffe-delivery:chart-items1.0.0",
      JSON.stringify(newItems)
    );
    setItemsChart(newItems);
  }

  return (
    <ChartItemsContext.Provider
      value={{
        itemsChart,
        handleAddProduct,
        handleDecreaseProduct,
        handleDeleteProduct,
        onChangeSetScreet,
        onChangeSetHouseNumber,
        onChangeSetCity,
        onChangeSetState,
        handleChangePaymentSlected,
        city,
        houseNumber,
        state,
        street,
        paymentSelected,
      }}
    >
      {children}
    </ChartItemsContext.Provider>
  );
}
