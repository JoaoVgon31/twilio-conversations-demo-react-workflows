import { CSSProperties } from "react";

export default {
  appContainer: (alertsExist: boolean): CSSProperties => ({
    display: "flex",
    flexDirection: "row",
    height: alertsExist ? "calc(100% - 122px)" : "calc(100% - 72px)",
    width: "100%",
    pointerEvents: alertsExist ? "none" : "auto",
  }),
  flex: {
    display: "flex",
  },
  appWrapper: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  } as CSSProperties,
  convosWrapper: {
    height: "100%",
    width: 320,
    position: "relative",
    backgroundColor: "#F4F4F6",
  } as CSSProperties,
  messagesWrapper: {
    flex: 1,
  } as CSSProperties,
  appHeader: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#06033A",
    padding: "20px 25px",
  },
  appLogoWrapper: {
    width: "40px",
    height: "40px",
    borderRadius: "5px",
    border: "1.25px solid #394762",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as CSSProperties,
  appLogoTitle: {
    fontSize: "14px",
    fontWeight: 600,
    textAlign: "center",
    color: "#FFFFFF",
    lineHeight: "20px",
    paddingLeft: "16px",
  } as CSSProperties,
  appLogoSubTitle: {
    fontSize: "12px",
    fontWeight: 600,
    textAlign: "left",
    color: "#AEB2C1",
    lineHeight: "20px",
  } as CSSProperties,
  userTile: {
    display: "flex",
    alignItems: "flex-start",
  },
  userName: {
    color: "#FFFFFF",
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "20px",
    display: "flex",
    justifyContent: "center",
  } as CSSProperties,
  userStatus: {
    fontSize: "12px",
    display: "flex",
    flexDirection: "row",
    lineHeight: "20px",
    fontWeight: "400",
    alignItems: "center",
  } as CSSProperties,
  paginationSpinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  } as CSSProperties,
  app: {
    flex: 1,
    height: "100%",
    width: "100%",
    position: "absolute",
  } as CSSProperties,
  buttonWrapper: {
    flexDirection: "row",
    paddingRight: "16px",
  } as CSSProperties,
  convosWrapperBox: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  } as CSSProperties,
  convoList: {
    overflowY: "auto",
    position: "absolute",
    top: "65px",
    bottom: "60px",
    width: "320px",
  } as CSSProperties,
  collapseButtonBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    paddingTop: "12px",
    paddingBottom: "20px",
    paddingRight: "16px",
    paddingLeft: "16px",
    position: "absolute",
    bottom: 0,
    borderTop: "1px solid #CACDD8",
  } as CSSProperties,
  newConvoButton: {
    padding: "14px 16px",
    width: "100%",
    borderBottom: "1px solid #CACDD8",
  } as CSSProperties,
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#001489",
  } as CSSProperties,
  logo: {
    width: "42px",
  } as CSSProperties,
  loginTitle: {
    paddingTop: "2px",
    color: "#FFFFFF",
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: 500,
  } as CSSProperties,
  subTitle: {
    color: "#AEB2C1",
    fontSize: "14px",
    lineHeight: "20px",
    paddingBottom: "40px",
  } as CSSProperties,
  loginContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 3,
  } as CSSProperties,
  loginForm: {
    backgroundColor: "#FFFFFF",
    borderRadius: "8px",
  } as CSSProperties,
  userInput: {
    paddingTop: "24px",
    width: "320px",
    marginLeft: "24px",
    marginRight: "24px",
  } as CSSProperties,
  passwordInput: {
    paddingTop: "16px",
    width: "320px",
    marginLeft: "24px",
    marginRight: "24px",
  } as CSSProperties,
  loginButton: {
    paddingTop: "32px",
    paddingBottom: "24px",
    marginLeft: "24px",
    marginRight: "24px",
  } as CSSProperties,
  loginBackground: {
    position: "absolute",
    alignSelf: "flex-end",
    top: "50%",
    height: "50%",
    width: "100%",
    backgroundColor: "#001489",
    overflow: "hidden",
  } as CSSProperties,
  modalInputLabel: {
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "20px",
  } as CSSProperties,
  settingsWrapper: {
    zIndex: 1,
    paddingTop: "22px",
  } as CSSProperties,
  optionWrapper: {
    width: "232px",
  } as CSSProperties,
  collapsedList: {
    width: "70px",
  } as CSSProperties,
};
