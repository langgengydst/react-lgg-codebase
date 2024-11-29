import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PokemonFilter } from "@/repositories/pokemon";
import { useSearchParams } from "react-router";

export const Filter = () => {
  const [_, setSearchParams] = useSearchParams();

  const handleFilterChange = (
    key: keyof PokemonFilter,
    filter: string | number,
  ) => {
    setSearchParams((params) => ({
      ...params,
      [key]: filter,
    }));
  };
  return (
    <section className="flex gap-4">
      <Select onValueChange={(val) => handleFilterChange("limit", val)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Limit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="100">100</SelectItem>
          <SelectItem value="200">200</SelectItem>
          <SelectItem value="300">300</SelectItem>
          <SelectItem value="2000">2000</SelectItem>
        </SelectContent>
      </Select>
    </section>
  );
};
