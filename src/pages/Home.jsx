import DashboardBox from "../components/dashboard/DashboardBox"
import ActionsContainer from "../components/dashboard/ActionsContainer"
import useCreateItens from "../hooks/useCreateItens"
import useTotalItem from "../hooks/useTotalItem"
import EnougthItens from "../components/item/EnougthItens"
import RecentItens from "../components/item/RecentItens"
import useRecentItens from '../hooks/useRecentItens'
import useEnougthItens from "../hooks/useEnougthItens"

export default function Home() {
    
    const { itens } = useCreateItens()
    const { recentItens } = useRecentItens()
    const { enougthItens } = useEnougthItens()

    return(
        <main>
            <section id="dashboard-section">
                
                    <DashboardBox
                        boxName="Diversidade de itens"
                        dashboardValue={itens.length}
                    />
                    <DashboardBox
                        boxName="Inventário total"
                        dashboardValue={useTotalItem()}
                    />
                    <DashboardBox
                        boxName="Itens recentes"
                        dashboardValue={recentItens.length}
                    />
                    <DashboardBox
                        boxName="Itens acabando"
                        dashboardValue={enougthItens.length}
                    />
                
            </section>
            <section id="action-section">

                <ActionsContainer title="Itens recentes" typeItem={<RecentItens />}/>

                <ActionsContainer title="Itens acabando" midTitle="Qtd." typeItem={<EnougthItens />}/>
            </section>
        </main>
    )
}