module.exports = {
    selectors: {
        menuBtn: '//*[@content-desc="Open Drawer"]',
        title: '//*[@text="Expenses"]',
        addBtn: '//*[@resource-id="io.perfecto.expense.tracker:id/list_add_btn"]',
        signupBtn:'//*[@resource-id="io.perfecto.expense.tracker:id/login_signup_btn"]',
        noexpensesMessage: '//*[@resource-id="io.perfecto.expense.tracker:id/tv_message"]',
        logoutBtn : '//*[@text="Logout"]',
        logoutPopupTitle: '//*[@resource-id="android:id/alertTitle"]',
        popupOkBtn: '//*[@resource-id="android:id/button1"]',
        attachBtn: '//*[@resource-id="io.perfecto.expense.tracker:id/add_attach_btn"]',
        cameraBtn: '//*[@resource-id="io.perfecto.expense.tracker:id/btn_attach_camera"]',
        usePhoto: '//*[@resource-id="com.sec.android.app.camera:id/okay"]',
        removeAttach: '//*[@resource-id="io.perfecto.expense.tracker:id/removeAttachment"]',
        takePic: '//*[@label="Take Picture"]'
     }
}

