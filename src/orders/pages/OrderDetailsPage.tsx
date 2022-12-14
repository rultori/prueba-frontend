import { Container, Loading, Spacer, Table } from "@nextui-org/react";
import { useParams } from "react-router-dom"
import { useAxios } from "../../hooks";
import { OrderDetailsTable } from "../components";

export const OrderDetailsPage = () => {
    let { id } = useParams()

    const { response, loading, error, sendData } = useAxios({
        method: 'GET',
        url: `orders/${id}`
    });

    return (
        <div>
            <h1>Detalles de la orden</h1>
            {
                loading ? <Container display="flex" css={{ justifyContent: 'center', alignContent: 'center', minHeight: '60vh' }}><Loading /></Container> : (
                    <>
                        {
                            error ? <h2>Hubo un error inesperado, vuelve a intentarlo</h2> : (
                                <div style={{ marginTop: '20px' }}>
                                    <OrderDetailsTable response={response} />
                                    <Spacer y={2} />
                                    <Table
                                        aria-label="Productos de la orden"
                                    >
                                        <Table.Header>
                                            <Table.Column>
                                                ID Producto
                                            </Table.Column>
                                            <Table.Column>
                                                Nombre Producto
                                            </Table.Column>
                                            <Table.Column>
                                                Precio
                                            </Table.Column>
                                            <Table.Column>
                                                Cantidad
                                            </Table.Column>
                                        </Table.Header>
                                        <Table.Body>
                                            {
                                                response?.data?.data.relationships.products.data.map((product: any) => (
                                                    <Table.Row key={product.id}>
                                                        <Table.Cell>
                                                            {product.id}
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                            {product.attributes.title}
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                            {product.attributes.price}
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                            {product.attributes.qty}
                                                        </Table.Cell>
                                                    </Table.Row>
                                                ))
                                            }
                                        </Table.Body>
                                    </Table>
                                </div>
                            )
                        }
                    </>
                )
            }
        </div>
    )
}
