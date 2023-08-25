export default function DashboardBox({boxName, dashboardValue}) {
    return (
        <article className="dash-info-box">
            <span>{boxName}</span>
            <div className="dashboard-value">
                <p className="dashboard-value-number">{dashboardValue}</p>
            </div>
        </article>
    )
}