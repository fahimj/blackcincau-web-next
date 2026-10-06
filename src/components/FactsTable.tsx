import { factKeys, type FactKey, type Facts } from "@/content/facts";

interface FactsTableProps {
  facts: Facts;
  labels: Record<FactKey, string>;
  keys?: readonly FactKey[];
  price?: { label: string; value: string };
}

export function FactsTable({ facts, labels, keys = factKeys, price }: FactsTableProps) {
  return (
    <table className="data-table">
      <tbody>
        {keys.map((key) => (
          <tr key={key}>
            <th scope="row">{labels[key]}</th>
            <td>{facts[key]}</td>
          </tr>
        ))}
        {price && (
          <tr>
            <th scope="row">{price.label}</th>
            <td>{price.value}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
