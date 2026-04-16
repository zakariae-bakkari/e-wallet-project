import { useState } from "react";
import { finduserbyaccount } from "../../db/database";

export default function TransfererPopup({
  authUser,
  setAuthUser,
  settransferePopup,
  setTransactions,
}) {
  const [form, setForm] = useState({
    selectedBene: "",
    selectedCard: "",
    amount: 0,
  });

  function checkUser(numcompte) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const destinataire = finduserbyaccount(numcompte);
        if (destinataire) {
          resolve(destinataire);
        } else {
          reject("Destinataire non trouvé");
        }
      }, 500);
    });
  }

  function checkSolde(exp, amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const solde = exp.wallet.balance;
        if (solde >= amount) {
          resolve("Solde suffisant");
        } else {
          reject("Solde insuffisant");
        }
      }, 400);
    });
  }

  // function updateSolde(exp, destinataire, amount) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       //exp.wallet.balance -= amount;

  //       setAuthUser({
  //         ...authUser,
  //         balance: (authUser.wallet.balance -= amount),
  //       });
  //       destinataire.wallet.balance += amount;
  //       resolve("Solde mis à jour");
  //     }, 300);
  //   });
  // }

  // function addtransactions(exp, destinataire, amount) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       // Transaction pour l'expéditeur (débit)
  //       const transactionDebit = {
  //         id: "4",
  //         type: "debit",
  //         amount: amount,
  //         from: exp.name,
  //         to: destinataire.name,
  //         date: new Date().toLocaleDateString(),
  //       };

  //       // Transaction pour le destinataire (crédit)
  //       const transactionCredit = {
  //         id: transactions.length + 1,
  //         type: "credit",
  //         amount: amount,
  //         from: exp.name,
  //         to: destinataire.name,
  //         date: new Date().toLocaleDateString(),
  //       };

  //       authUser.wallet.transactions.push(transactionDebit);

  //       setTransactions([...transactions, transactionDebit]);
  //       console.log(transactions);
  //       destinataire.wallet.transactions.push(transactionCredit);
  //       resolve("Transaction enregistrée");
  //     }, 200);
  //   });
  // }

  async function transferer(exp, numcompte, amount) {
    try {
      const numericAmount = parseFloat(amount);
      const destinataire = await checkUser(numcompte);
      await checkSolde(exp, numericAmount);

      // 1. Update the Local Auth User State (Expéditeur)
      const updatedExpediteur = {
        ...exp,
        wallet: {
          ...exp.wallet,
          balance: exp.wallet.balance - numericAmount,
          transactions: [
            ...exp.wallet.transactions,
            {
              id: Date.now(),
              type: "debit",
              amount: numericAmount,
              from: exp.name,
              to: destinataire.name,
              date: new Date().toLocaleDateString(),
            },
          ],
        },
      };

      // 2. Update Global States
      setAuthUser(updatedExpediteur);
      setTransactions(updatedExpediteur.wallet.transactions);

      // Note: In a real app, you'd send a request to update 'destinataire' in the DB here

      alert("Transfert réussi !");
      settransferePopup(false);
    } catch (error) {
      alert(error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Use the form state directly
    const selectedBeneficiary = authUser.wallet.beneficiaries.find(
      (b) => b.account === form.selectedBene
    );

    if (selectedBeneficiary) {
      transferer(authUser, selectedBeneficiary.account, form.amount);
    }
  }

  return (
    <>
      <div className="popup-overlay" id="transferPopup">
        <div className="popup-content">
          <div className="popup-header">
            <h2>Effectuer un transfert</h2>
            <button
              className="btn-close"
              id="closeTransferBtn"
              type="button"
              onClick={() => settransferePopup(false)}
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
                <label htmlFor="beneficiary">
                  <i className="fas fa-user"></i> Bénéficiaire
                </label>
                <select
                  id="beneficiary"
                  name="beneficiary"
                  required
                  value={form.selectedBene}
                  onChange={(e) =>
                    setForm({ ...form, selectedBene: e.target.value })
                  }
                >
                  <option value="" disabled>
                    Choisir un bénéficiaire
                  </option>
                  {authUser.wallet.beneficiaries.map((t) => (
                    <option key={t.id} value={t.account}>
                      {t.name}-{t.account}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="sourceCard">
                  <i className="fas fa-credit-card"></i> Depuis ma carte
                </label>
                <select
                  id="sourceCard"
                  name="sourceCard"
                  required
                  value={form.selectedCard}
                  onChange={(e) =>
                    setForm({ ...form, selectedCard: e.target.value })
                  }
                >
                  <option value="" disabled>
                    Sélectionner une carte
                  </option>
                  {authUser.wallet.cards.map((c) => (
                    <option key={c.numcards} value={c.numcards}>
                      {c.numcards}({c.balance}DH)
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="amount">
                  {" "}
                  <i></i> Montant{" "}
                </label>
                <div className="amount-input">
                  <input
                    type="number"
                    id="amount"
                    name="amount"
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

              <div className="form-options">
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="saveBeneficiary"
                    name="saveBeneficiary"
                  />
                  <label htmlFor="saveBeneficiary">
                    Enregistrer ce bénéficiaire
                  </label>
                </div>

                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="instantTransfer"
                    name="instantTransfer"
                  />
                  <label htmlFor="instantTransfer">
                    Transfert instantané
                    <span className="fee-badge">+13.4 MAD</span>
                  </label>
                </div>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  id="cancelTransferBtn"
                  onClick={() => settransferePopup(false)}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="submitTransferBtn"
                >
                  <i className="fas fa-paper-plane"></i> Transférer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
