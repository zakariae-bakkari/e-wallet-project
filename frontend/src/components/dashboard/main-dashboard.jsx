export default function DashboardMain({
  authUser,
  settransferePopup,
  setdemanderPopup,
  setrechargerPopup,
  transactions,
}) {
  return (
    <>
      {!authUser ? (
        <div>Loading...</div>
      ) : (
        <main className="dashboard-main">
          <div className="dashboard-container">
            <aside className="dashboard-sidebar">
              <nav className="sidebar-nav">
                <ul>
                  <li className="active">
                    <a href="#overview">
                      <i className="fas fa-home"></i>
                      <span>Vue d'ensemble</span>
                    </a>
                  </li>
                  <li>
                    <a href="#transactions">
                      <i className="fas fa-exchange-alt"></i>
                      <span>Transactions</span>
                    </a>
                  </li>
                  <li>
                    <a href="#cards">
                      <i className="fas fa-credit-card"></i>
                      <span>Mes cartes</span>
                    </a>
                  </li>
                  <li>
                    <a href="#transfers">
                      <i className="fas fa-paper-plane"></i>
                      <span>Transferts</span>
                    </a>
                  </li>
                  <li className="separator"></li>
                  <li>
                    <a href="#support">
                      <i className="fas fa-headset"></i>
                      <span>Aide & Support</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>

            <div className="dashboard-content">
              <section id="overview" className="dashboard-section active">
                <div className="section-header">
                  <h2>
                    Bonjour, <span id="greetingName">{authUser.name}</span> !
                  </h2>
                  <p className="date-display" id="currentDate">
                    {new Date().toLocaleString()}
                  </p>
                </div>

                <div className="summary-cards">
                  <div className="summary-card">
                    <div className="card-icon blue">
                      <i className="fas fa-wallet"></i>
                    </div>
                    <div className="card-details">
                      <span className="card-label">Solde disponible</span>
                      <span className="card-value" id="availableBalance">
                        {authUser.wallet.balance}
                      </span>
                    </div>
                  </div>

                  <div className="summary-card">
                    <div className="card-icon green">
                      <i className="fas fa-arrow-up"></i>
                    </div>
                    <div className="card-details">
                      <span className="card-label">Revenus</span>
                      <span className="card-value" id="monthlyIncome">
                        {authUser.wallet.transactions
                          .filter((t) => t.type == "credit")
                          .reduce(
                            (total, transaction) => total + transaction.amount,
                            0
                          )}
                      </span>
                    </div>
                  </div>

                  <div className="summary-card">
                    <div className="card-icon red">
                      <i className="fas fa-arrow-down"></i>
                    </div>
                    <div className="card-details">
                      <span className="card-label">Dépenses</span>
                      <span className="card-value" id="monthlyExpenses">
                        {authUser.wallet.transactions
                          .filter((t) => t.type == "debit")
                          .reduce(
                            (total, transaction) => total + transaction.amount,
                            0
                          )}
                      </span>
                    </div>
                  </div>

                  <div className="summary-card">
                    <div className="card-icon purple">
                      <i className="fas fa-credit-card"></i>
                    </div>
                    <div className="card-details">
                      <span className="card-label">Cartes actives</span>
                      <span className="card-value" id="activeCards">
                        {authUser.wallet.cards.length}{" "}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="quick-actions">
                  <h3>Actions rapides</h3>
                  <div className="action-buttons">
                    <button
                      className="action-btn"
                      id="quickTransfer"
                      type="button"
                      onClick={() => settransferePopup(true)}
                    >
                      <i className="fas fa-paper-plane"></i>
                      <span>Transférer</span>
                    </button>
                    <button
                      className="action-btn"
                      id="quickToRecharger"
                      type="button"
                      onClick={() => setrechargerPopup(true)}
                    >
                      <i className="fas fa-plus-circle"></i>
                      <span>Recharger</span>
                    </button>
                    <button
                      className="action-btn"
                      id="quickRequest"
                      type="button"
                      onClick={() => setdemanderPopup(true)}
                    >
                      <i className="fas fa-hand-holding-usd"></i>
                      <span>Demander</span>
                    </button>
                  </div>
                </div>

                <div className="recent-transactions">
                  <div className="section-header">
                    <h3>Transactions récentes</h3>
                  </div>
                  <div
                    className="transactions-list"
                    id="recentTransactionsList"
                  >
                    {transactions
                      .slice()
                      .reverse()
                      .map((t, index) => (
                        <div
                          key={index}
                          className="transaction-item"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "10px",
                            borderBottom: "1px solid #eee",
                            color: t.type === "debit" ? "#e74c3c" : "#2ecc71",
                          }}
                        >
                          <span>{t.date}</span>
                          <span>
                            {t.type === "debit" ? "-" : "+"}
                            {t.amount} MAD
                          </span>
                          <span>
                            {t.type === "debit"
                              ? `a: ${t.to}`
                              : `de: ${t.from}`}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </section>

              <section id="cards" className="dashboard-section">
                <div className="section-header">
                  <h2>Mes cartes</h2>
                  <button
                    className="btn btn-secondary"
                    id="addCardBtn"
                    type="button"
                  >
                    <i className="fas fa-plus"></i> Ajouter une carte
                  </button>
                </div>

                <div className="cards-grid" id="cardsGrid">
                  <div className="card-item">
                    <div className="card-preview visa">
                      <div className="card-chip"></div>
                      <div className="card-number">?</div>
                      <div className="card-holder">?</div>
                      <div className="card-expiry">?</div>
                      <div className="card-type">?</div>
                    </div>
                    <div className="card-actions">
                      <button
                        className="card-action"
                        title="Définir par défaut"
                        type="button"
                      >
                        <i className="fas fa-star"></i>
                      </button>
                      <button
                        className="card-action"
                        title="Geler la carte"
                        type="button"
                      >
                        <i className="fas fa-snowflake"></i>
                      </button>
                      <button
                        className="card-action"
                        title="Supprimer"
                        type="button"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
