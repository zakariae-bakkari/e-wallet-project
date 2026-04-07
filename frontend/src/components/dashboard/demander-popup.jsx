export default function DemanderPopup() {
  return (
    <>
      <div className="popup-overlay" id="DemanderPopup">
        <div className="popup-content">
          <div className="popup-header">
            <h2>Effectuer un recharge</h2>
            <button className="btn-close" id="closedemanderBtn" type="button">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="popup-body">
            <form id="transferForm" className="transfer-form">
              <div className="form-group">
                <label for="accountDemander">
                  <i className="fas fa-credit-card"></i> entrer la carte
                </label>
                <input
                  type="text"
                  name="accountDemander"
                  id="accountDemander"
                />
              </div>

              <div className="form-group">
                <label for="amountdemander">
                  {" "}
                  <i></i> Montant{" "}
                </label>
                <div className="amount-input">
                  <input
                    type="number"
                    id="amountdemander"
                    name="amountdemander"
                    min="1"
                    step="0.01"
                    placeholder="0.00"
                    required
                  />
                  <span className="currency">MAD</span>
                </div>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  id="canceldemanderBtn"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="submitdemanderBtn"
                >
                  demander
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
