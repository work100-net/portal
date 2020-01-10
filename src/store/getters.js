const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  size: state => state.app.size,
  device: state => state.app.device,
  permission_routes: state => state.permission.routes,
  guest_routes: state => state.permission.guestRoutes,
  errorLogs: state => state.errorLog.logs
}
export default getters
