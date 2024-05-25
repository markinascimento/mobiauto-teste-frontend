// -> Services
import BrandServices from "@/services/BrandServices";

// -> Components
import { Form } from "@/components/Form";

// -> Styles
import styles from "../styles/home.module.css";

export default async function Home() {
  const listBrands = await BrandServices.getAllBrands();

  return (
    <div className={styles.main}>
      <h1> Tabela fipe </h1>

      <p className={styles.description}>
        Consulte o valor do veículo de uma forma gratuita
      </p>

      <Form options={listBrands} />
    </div>
  );
}
