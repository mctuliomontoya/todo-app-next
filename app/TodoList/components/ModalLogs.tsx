export default function ModalLogs() {
  return (
    <dialog
      id="my_modal_2"
      className="box-logs absolute text-bone transition-all duration-1000 ease-in-out min-w-fit w-1/2 h-1/2 max-w-screen bg-ui-base-300 border-[2px] border-transparent rounded-2xl "
    >
      <div className="min-h-full flex flex-col items-center">
        <h3 className="font-bold text-bone text-lg">Hello!</h3>
        <p className="py-4">LOGS</p>
      </div>
      <form method="dialog" className="flex justify-center">
        <button className="absolute bottom-5 bg-[#fcba28] border-2 border-transparent hover:border-[#fcba28] hover:bg-transparent hover:text-[#fcba28] p-3 text-black font-bold rounded-md">
          close
        </button>
      </form>
    </dialog>
  );
}
