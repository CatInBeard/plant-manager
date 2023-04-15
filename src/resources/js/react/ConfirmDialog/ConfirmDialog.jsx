import PopupContainer from "../PopupContainer/PopupContainer";

let ConfirmDialog = ({children, actionButtonText="Ok", actionButtonType="primary",cancelAction,primaryAction, headerText="Confirm"}) => {
    return <PopupContainer>
            <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <strong className="me-auto">{headerText}</strong>
                    <button type="button" class="btn-close" aria-label="Close" onClick={cancelAction}></button>
                </div>
                <div className="toast-body">
                    {children}
                    <div className="row pt-2">
                        <div className="col justify-content-center d-flex">
                            <button className="btn btn-secondary" onClick={cancelAction}>
                                Cancel
                            </button>
                        </div>
                        <div className="col justify-content-center d-flex">
                            <button className={"btn btn-"+actionButtonType} onClick={primaryAction}>
                                {actionButtonText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </PopupContainer>;
}

export default ConfirmDialog;