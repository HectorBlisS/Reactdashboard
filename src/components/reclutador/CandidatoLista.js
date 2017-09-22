import React, {Component, PropTypes} from 'react';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import {Link} from 'react-router-dom';



const ElRow =({candidato})=>(
    <TableRow>
        <TableRowColumn>
            <Link to={`/reclutador/${candidato.id}`} >
            {candidato.id}
            </Link>
            </TableRowColumn>
        <TableRowColumn>{candidato.nombre}</TableRowColumn>
        <TableRowColumn>{candidato.telefono}</TableRowColumn>
        <TableRowColumn>{candidato.correo}</TableRowColumn>
        <TableRowColumn>{candidato.fecha_reclutamiento}</TableRowColumn>
        <TableRowColumn>{candidato.candidato}</TableRowColumn>


    </TableRow>
);


const CandidatoLista = ({lista}) => {
    return (
        <div className="candidato-tabla">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Nombre</TableHeaderColumn>
                        <TableHeaderColumn>Teléfono</TableHeaderColumn>
                        <TableHeaderColumn>Correo</TableHeaderColumn>
                        <TableHeaderColumn>Reclutado</TableHeaderColumn>
                        <TableHeaderColumn>Status</TableHeaderColumn>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {lista.map(c=><ElRow key={c.id} candidato={c}/>
                    )}
                </TableBody>
            </Table>
        </div>
    )
};



export default CandidatoLista;
