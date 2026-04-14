export default function RechargerPopup({ setAuthUser, setrechargerPopup }) {
  return (
    <>
      <div className="popup-overlay" id="rechargerPopup">
        <div className="popup-content">
          <div className="popup-header">
            <h2>Effectuer un recharge</h2>
            <button
              className="btn-close"
              id="closeRechargerBtn"
              type="button"
              onClick={() => setrechargerPopup(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="popup-body">
            <form id="transferForm" className="transfer-form">
              <div className="form-group">
                <label htmlFor="sourceCardRecharger">
                  <i className="fas fa-credit-card"></i> Choisir la carte
                </label>
                <select
                  id="sourceCardRecharger"
                  name="sourceCardRecharger"
                  required
                >
                  <option value="" disabled>
                    Sélectionner une carte
                  </option>
                  {setAuthUser}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="amountrecharger">
                  {" "}
                  <i></i> Montant{" "}
                </label>
                <div className="amount-input">
                  <input
                    type="number"
                    id="amountrecharger"
                    name="amountrecharger"
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
                  id="cancelRechargerBtn"
                  onClick={() => setrechargerPopup(false)}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="submitRechargerBtn"
                >
                  recharger
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
