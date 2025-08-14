

import Styles from "./Service.module.css"
export default function ServiceInfo() {
  return (
    <div className={Styles.contactInfo}>
      <h1>Your Servisec</h1>
      <p>📞 Phone: +880 1234-567890</p>
      <p>📧 Email: support@example.com</p>
      <p>🕐 Time: Sundy to Saterday ( 10:AM to 6:00 PM)</p>
      <p>📍 Location: Yunnan Unversity (Chenggong Campus)</p>
    </div>
  );
}
