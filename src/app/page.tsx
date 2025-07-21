"use client";

import { useEffect, useState } from "react";
import DataTable from "@/components/DataTable";

type Entry = { id: number; texto: string };

type AllData = {
  modelos: Entry[];
  conjuncoes: Entry[];
  criaturas: Entry[];
  objetos: Entry[];
  tecnicas: Entry[];
  acoes: Entry[];
  geografia: Entry[];
};

export default function HomePage() {
  const [data, setData] = useState<AllData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/all")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar dados.");
        return res.json();
      })
      .then((json: AllData) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-4">Carregando...</p>;
  if (error) return <p className="p-4 text-red-600">{error}</p>;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Tabela de Dados</h1>
      {data && (
        <>
          <DataTable title="Modelos" data={data.modelos} />
          <DataTable title="Conjunções" data={data.conjuncoes} />
          <DataTable title="Criaturas" data={data.criaturas} />
          <DataTable title="Objetos" data={data.objetos} />
          <DataTable title="Técnicas" data={data.tecnicas} />
          <DataTable title="Ações" data={data.acoes} />
          <DataTable title="Geografia" data={data.geografia} />
        </>
      )}
    </main>
  );
}
