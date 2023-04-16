import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";

let PhotoUpdaterContainer = ({cancelAction, primaryAction}) => {
    return <ConfirmDialog actionButtonText="Update" actionButtonType="primary" primaryAction={primaryAction} cancelAction={cancelAction} headerText="Update photo">
                <div className="d-flex justify-content-end align-items-center p-5">
                    <form>
                        <input type="file" accept="image/*" name="image" className="form-control" id="new_plant_image" />
                    </form>
                </div>
            </ConfirmDialog>
}

export default PhotoUpdaterContainer;