import { ModalEdit } from "@/components/layout/modal-edit";
import { ButtonDeleteWithModal } from "@/components/layout/modal-deleted";

interface ActionsProps {
  id: string;
  routerDeleted: string;
  onUpdateDataTable: () => void;
  children: React.ReactNode;
}

export function ButtonsForActionTable({ routerDeleted, id, onUpdateDataTable, children }: ActionsProps) {
  return (
    <div className="flex gap-2 justify-center">
      {/* <ModalEdit id={id} updateRegister={onUpdateDataTable} children={children} /> */}
      <ButtonDeleteWithModal url={routerDeleted} closed={onUpdateDataTable} />
    </div>
  );
}
