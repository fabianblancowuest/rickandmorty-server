import React from "react";

const TicketTable = ({ tickets }) => {
	return (
		<div>
			<h2>Todos los Tickets</h2>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Asunto</th>
						<th>Descripción</th>
						<th>Estado</th>
					</tr>
				</thead>
				<tbody>
					{tickets.map((ticket) => (
						<tr key={ticket.id}>
							<td>{ticket.id}</td>
							<td>{ticket.asunto}</td>
							<td>{ticket.descripcion}</td>
							<td>{ticket.estado}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TicketTable;
