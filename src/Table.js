import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Table({ type, tableHeader, urlAPI }) {
	const [tableData, setTableData] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetch(urlAPI)
			.then((res) => res.json())
			.then((dataAPI) => {
				setTableData(dataAPI.reverse());
			});
	}, [urlAPI]);

	const onCreate = () => {
		navigate(`${type}/create`);
	};

	const onDetails = (id) => {
		navigate(`${type}/${id}`);
	};

	const onEdit = (id) => {
		navigate(`${type}/${id}/edit`);
	};

	const onRemove = (id) => {
		setTableData(tableData.filter((item) => item.id !== id));
	};

	// Omitir los primeros 4 elementos del array tableData para usuarios
	const userTableData = type === "/users" ? tableData.slice() : tableData;
	const titleCreate = type === "/users" ? "Create User" : "Create Product";

	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg px-24 py-24">
			{/* Botón Create */}

			<button
				onClick={onCreate}
				className="absolute top-0 right-1/4 mt-4 mr-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg text-sm px-5 py-2.5"
			>
				{titleCreate}
			</button>
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
					<tr>
						{tableHeader.map((header) => (
							<th scope="col" className="px-6 py-3" key={header}>
								{header.toUpperCase()}
							</th>
						))}
						<th scope="col" className="px-6 py-3 text-center">
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{userTableData ? (
						userTableData.map((item) => (
							<tr className="bg-white border-b dark:border-gray-700" key={item.id}>
								{tableHeader.map((name) => {
									if (["avatar", "images"].includes(name)) {
										const image = Array.isArray(item?.[name])
											? item?.[name]?.[0]
											: `https://avatars.dicebear.com/api/croodles/${Math.floor(Math.random() * 10000000 + 1)}.svg`;

										return (
											<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap " key={name}>
												<img className="w-10 h-10 rounded-full" alt={item.title} src={image}></img>
											</th>
										);
									}

									if ("updatedAt" === name) {
										return (
											<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap " key={name}>
												{new Date(item?.[name]).toLocaleString()}
											</th>
										);
									}

									return (
										<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap " key={name}>
											{item?.[name]}
										</th>
									);
								})}
								<td className="px-6 py-4">
									<button
										onClick={() => onDetails(item.id)}
										type="button"
										className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
											/>
										</svg>
									</button>
									<button
										onClick={() => onEdit(item.id)}
										type="button"
										className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
											/>
										</svg>
									</button>
									<button
										onClick={() => onRemove(item.id)}
										type="button"
										className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
											/>
										</svg>
									</button>
								</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan={tableHeader.length + 1}>{type.toUpperCase()} NOT FOUND</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}
