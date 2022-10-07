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

interface FromDataType {
  cep: {
    data: string;
    isNotValid: boolean;
  };
  street: {
    data: string;
    isNotValid: boolean;
  };
  houseNumber: {
    data: string;
    isNotValid: boolean;
  };
  complement: {
    data: string;
    isNotValid: boolean;
  };
  district: {
    data: string;
    isNotValid: boolean;
  };
  city: {
    data: string;
    isNotValid: boolean;
  };
  state: {
    data: string;
    isNotValid: boolean;
  };
}

interface ChartItemsContextType {
  itemsChart: ChartItemType[];
  handleAddProduct: (
    id: number,
    name: string,
    img: string,
    price: string
  ) => void;
  handleFormValidation: () => void;
  handleDecreaseProduct: (id: number) => void;
  handleDeleteProduct: (id: number) => void;
  onChangeSetCep: (cep: string) => void;
  onChangeSetScreet: (street: string) => void;
  onChangeSetHouseNumber: (houseNumber: string) => void;
  onChangeSetComplement: (complement: string) => void;
  onChangeSetDistrict: (district: string) => void;
  onChangeSetCity: (city: string) => void;
  onChangeSetState: (state: string) => void;
  handleChangePaymentSlected: (payment: string) => void;
  inputData: FromDataType;
  paymentSelected: string;
  cep: string;
  street: string;
  houseNumber: string;
  complement: string;
  district: string;
  city: string;
  state: string;
}

export const ChartItemsContext = createContext({} as ChartItemsContextType);

export function ChartItemsContextProvider({
  children,
}: ChartItemsContextProps) {
  const [itemsChart, setItemsChart] = useState<ChartItemType[]>([]);
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [district, setDistric] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [paymentSelected, setPaymentSeletected] = useState("");
  const [inputData, setInputData] = useState<FromDataType>({
    cep: {
      data: "",
      isNotValid: false,
    },
    street: {
      data: "",
      isNotValid: false,
    },
    houseNumber: {
      data: "",
      isNotValid: false,
    },
    complement: {
      data: "",
      isNotValid: false,
    },
    district: {
      data: "",
      isNotValid: false,
    },
    city: {
      data: "",
      isNotValid: false,
    },
    state: {
      data: "",
      isNotValid: false,
    },
  });

  function onChangeSetCep(cep: string) {
    setCep(cep);
  }

  function onChangeSetScreet(street: string) {
    setStreet(street);
  }

  function onChangeSetHouseNumber(houseNumber: string) {
    setHouseNumber(houseNumber);
  }

  function onChangeSetComplement(complement: string) {
    setComplement(complement);
  }

  function onChangeSetDistrict(district: string) {
    setDistric(district);
  }

  function onChangeSetCity(city: string) {
    setCity(city);
  }

  function onChangeSetState(state: string) {
    setState(state);
  }

  function handleFormValidation() {
    const objData = {
      cep: {
        data: cep,
        isNotValid: cep ? true : false,
      },
      street: {
        data: street,
        isNotValid: street ? true : false,
      },
      houseNumber: {
        data: houseNumber,
        isNotValid: houseNumber ? true : false,
      },
      complement: {
        data: complement,
        isNotValid: complement ? true : false,
      },
      district: {
        data: district,
        isNotValid: district ? true : false,
      },
      city: {
        data: city,
        isNotValid: city ? true : false,
      },
      state: {
        data: state,
        isNotValid: state ? true : false,
      },
    };
    setInputData(objData);
  }

  function handleChangePaymentSlected(payment: string) {
    setPaymentSeletected(payment);
    console.log(payment);
  }

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

  useEffect(() => {
    const StotredItems = localStorage.getItem(
      "@coffe-delivery:chart-items1.0.0"
    );

    if (StotredItems) {
      setItemsChart(JSON.parse(StotredItems));
    }
  }, []);

  return (
    <ChartItemsContext.Provider
      value={{
        handleFormValidation,
        handleAddProduct,
        handleDecreaseProduct,
        handleChangePaymentSlected,
        handleDeleteProduct,
        onChangeSetCep,
        onChangeSetScreet,
        onChangeSetHouseNumber,
        onChangeSetComplement,
        onChangeSetDistrict,
        onChangeSetCity,
        onChangeSetState,
        inputData,
        itemsChart,
        city,
        houseNumber,
        state,
        street,
        paymentSelected,
        cep,
        complement,
        district,
      }}
    >
      {children}
    </ChartItemsContext.Provider>
  );
}
