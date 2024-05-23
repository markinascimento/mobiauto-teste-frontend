// -> API
import { api } from "@/services/httpClient";

// -> Components
import { Form } from "@/components/Form";

// -> Types
import { BrandDTO } from "@/dtos/BrandDTO";

// -> Styles
import styles from "../styles/home.module.css";

async function getAllBrands() {
  const { data } = await api.get<BrandDTO[]>("/carros/marcas");
  return data.map((brand) => {
    return {
      label: brand.nome,
      code: brand.codigo,
    };
  });
}

export default async function Home() {
  const listBrands = await getAllBrands();

  return (
    <div className={styles.main}>
      <Form options={listBrands} />
    </div>
  );
}
