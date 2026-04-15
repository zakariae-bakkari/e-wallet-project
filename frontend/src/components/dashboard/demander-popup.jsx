export default function DemanderPopup({ setAuthUser, setdemanderPopup }) {
  const [form, setForm] = useState({
    card: "",
    amount: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <>
      <div className="popup-overlay" id="DemanderPopup">
        <div className="popup-content">
          <div className="popup-header">
            <h2>Effectuer un recharge</h2>
            <button
              className="btn-close"
              id="closedemanderBtn"
              type="button"
              onClick={() => setdemanderPopup(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="popup-body">
            <form
              id="transferForm"
              className="transfer-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="accountDemander">
                  <i className="fas fa-credit-card"></i> entrer la carte
                </label>
                <input
                  type="text"
                  name="accountDemander"
                  id="accountDemander"
                  value={(e) => form.card}
                  onChange={(e) => setForm({ ...form, card: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="amountdemander">
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
                    value={form.amount}
                    onChange={(e) =>
                      setForm({ ...form, amount: e.target.value })
                    }
                  />
                  <span className="currency">MAD</span>
                </div>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  id="canceldemanderBtn"
                  onClick={() => setdemanderPopup(false)}
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
