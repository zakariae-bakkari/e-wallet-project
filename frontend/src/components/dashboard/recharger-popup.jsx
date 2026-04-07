export default function RechargerPopup() {
  return (
    <>
      <div class="popup-overlay" id="rechargerPopup">
        <div class="popup-content">
          <div class="popup-header">
            <h2>Effectuer un recharge</h2>
            <button class="btn-close" id="closeRechargerBtn" type="button">
              <i class="fas fa-times"></i>
            </button>
          </div>

          <div class="popup-body">
            <form id="transferForm" class="transfer-form">
              <div class="form-group">
                <label for="sourceCardRecharger">
                  <i class="fas fa-credit-card"></i> Choisir la carte
                </label>
                <select
                  id="sourceCardRecharger"
                  name="sourceCardRecharger"
                  required
                >
                  <option value="" disabled selected>
                    Sélectionner une carte
                  </option>
                </select>
              </div>

              <div class="form-group">
                <label for="amountrecharger">
                  {" "}
                  <i></i> Montant{" "}
                </label>
                <div class="amount-input">
                  <input
                    type="number"
                    id="amountrecharger"
                    name="amountrecharger"
                    min="1"
                    step="0.01"
                    placeholder="0.00"
                    required
                  />
                  <span class="currency">MAD</span>
                </div>
              </div>

              <div class="form-actions">
                <button
                  type="button"
                  class="btn btn-secondary"
                  id="cancelRechargerBtn"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  class="btn btn-primary"
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
