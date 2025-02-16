import ClienteForm from "../components/templates/clientes/ClienteForm"
import ClienteList from "../components/templates/clientes/ClienteList"

export const Clientes = () => {

    return (
        <div>
            <h1>Gestión de Clientes</h1>
            <ClienteForm onClose={() => {}} />
            <ClienteList />
        </div>
    )
}