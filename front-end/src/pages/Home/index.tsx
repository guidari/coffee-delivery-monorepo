import { coffeesList } from "../../api/coffeeMock";
import CoffeeCard, { ICoffee } from "./components/CoffeeCard";
import InfoTextGrid from "./components/InfoTextGrid";
import {
  BannerContainer,
  CoffeesGird,
  HomeContainer,
  InfoCoffeeGrid,
  InfoContainer,
  SubTitle,
  Title,
} from "./style";

import CartCircle from "../../assets/images/cartCircle.svg";
import Package from "../../assets/images/package.svg";
import Timer from "../../assets/images/timer.svg";
import CoffeeCircle from "../../assets/images/coffeeCircle.svg";
import Banner from "../../assets/images/banner.svg";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [coffeeData, setCoffeeData] = useState([]);
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To store error messages

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axios.get("http://localhost:3333/products");
        console.log("response", response.data);
        setCoffeeData(response.data); // Set fetched data to state
      } catch (err: any) {
        setError(err.message); // Set error if request fails
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <HomeContainer>
      <InfoContainer>
        <div>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <SubTitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </SubTitle>
          <InfoCoffeeGrid>
            <InfoTextGrid title="Compra simples e segura" image={CartCircle} />
            <InfoTextGrid
              title="Embalagem mantém o café intacto"
              image={Package}
            />
            <InfoTextGrid title="Entrega rápida e rastreada" image={Timer} />
            <InfoTextGrid
              title="O café chega fresquinho até você"
              image={CoffeeCircle}
            />
          </InfoCoffeeGrid>
        </div>
        <BannerContainer>
          <img
            src={Banner}
            alt="Imagem com um copo de café e grãos de café em volta"
          />
        </BannerContainer>
      </InfoContainer>
      <h2 id="main">Nossos cafés</h2>

      <CoffeesGird>
        {coffeeData?.map((coffee: any) => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />;
        })}
      </CoffeesGird>
    </HomeContainer>
  );
}
