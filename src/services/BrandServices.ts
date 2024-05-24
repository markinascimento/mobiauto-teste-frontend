import { BrandDTO } from "@/dtos/BrandDTO";
import { api } from "./httpClient";
import { ModelDTO } from "@/dtos/ModelDTO";

/* eslint-disable import/no-anonymous-default-export */
class BrandServices {
  async getAllBrands() {
    const { data } = await api.get<BrandDTO[]>("/carros/marcas");
    return data.map((brand) => {
      return {
        label: brand.nome,
        code: brand.codigo,
      };
    });
  }

  async getAllModels(brand: string) {
    const { data } = await api.get<ModelDTO>(`/carros/marcas/${brand}/modelos`);
    return data.modelos.map((brand) => {
      return {
        label: brand.nome,
        code: brand.codigo,
      };
    });
  }
}

export default new BrandServices();