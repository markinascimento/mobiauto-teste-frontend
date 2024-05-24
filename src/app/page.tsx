// -> Services
import BrandServices from "@/services/BrandServices";

// -> Components
import { Form } from "@/components/Form";

import styles from '../styles/home.module.css';

export default async function Home() {
  const listBrands = await BrandServices.getAllBrands();
  
  return (
    <div className={styles.main}>
      <Form options={listBrands} />
    </div>
  ) 
}
