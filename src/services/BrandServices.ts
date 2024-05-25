// -> Base API
import { api } from "./httpClient";

// -> Types
import { BrandDTO } from "@/dtos/BrandDTO";
import { ModelDTO } from "@/dtos/ModelDTO";
import { ResultDTO } from "@/dtos/ResultDTO";

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

  async getAllYears(brand: string, model: string) {
    const { data } = await api.get<BrandDTO[]>(
      `/carros/marcas/${brand}/modelos/${model}/anos`
    );
    return data.map((brand) => {
      return {
        label: brand.nome,
        code: brand.codigo,
      };
    });
  }

  async checkValue(brand: string, model: string, year: string) {
    const { data } = await api.get<ResultDTO>(
      `/carros/marcas/${brand}/modelos/${model}/anos/${year}`
    );
    return data;
  }
}

export default new BrandServices();
