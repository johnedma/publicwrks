import React from 'react';

const Confirmation = ({ modal, order }) => {
    debugger
    // if (modal.false) return

    return (
        <div>

            <div className={`${modal}`}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">PublicWRKS Order Confirmation</p>
                        <button className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        Your order number is <b>{order.confId}</b> We have emailed your order confirmation, and will
                send you an update when your order has shipped.
                </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success">Save changes</button>
                        <button className="button">Cancel</button>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Confirmation;
// add nav favicon or fab that updates on add to cart
// after purchase complete, create order with shipped to default of false
// form should have csurf
// seed data and models tonight + shirt mock w/ img inside it
