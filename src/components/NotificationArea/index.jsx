import NotificationData from "../../data/NotificationData";

function NotificationArea({ setShowNotif }) {
  const onMouseOver = () => {
    setShowNotif(true);
    console.log("hovered notif");
    };
  return (
    <>
        <div onMouseOver={onMouseOver} className="absolute right-0 mt-10 mr-3 bg-white rounded-md shadow-lg overflow-hidden z-20 duration-100">
          <div class="py-2">
            {/* TODO: add href to payment pending (redirect to history) */}
            {NotificationData.map((notifData, index) => (
              <div
                key={index}
                className="px-4 py-3 hover:bg-gray-100 border-b-[1px]  border-slate-300"
              >
                <div className="flex justify-between mx-2 mb-1">
                  <p className="text-sm font-bold">{notifData.type}</p>
                  <p className="text-gray-600 text-sm">{notifData.time}</p>
                </div>
                <p className="text-gray-600 text-sm mx-2">
                  {notifData.content}
                </p>
              </div>
            ))}
          </div>
        </div>
    </>
  );
}

export default NotificationArea;
