type Entry = {
    id: number,
    texto: string
};

type DataTableProps = {
    title: string,
    data: Entry[],
    className?: string
};

export default function DataTable({ title, data, className = "" }: DataTableProps) {
    return(
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <table className={`min-w-full border border-gray-300 text-sm ${className}`}>
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="border px-4 py-2 text-left">ID</th>
                        <th className="border px-4 py-2 text-left">Texto</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((entry) => (
                        <tr key={entry.id}>
                        <td className="border px-4 py-1">{entry.id}</td>
                        <td className="border px-4 py-1">{entry.texto}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
    );
}