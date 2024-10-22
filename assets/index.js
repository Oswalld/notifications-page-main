const button = document.querySelector(".clear")
button.addEventListener('click', () => {
    const notifications = document.querySelectorAll(".notification")
    const notificationsDot = document.querySelectorAll(".notification-icon")
    const notificationsCount = document.querySelectorAll(".notification-count")

    notifications.forEach(notification => {
        notification.style.backgroundColor = "transparent"
    })

    notificationsDot.forEach(dot => {
        dot.style.display = "none"
    })

    notificationsCount.forEach(count => {
        count.textContent = "0"
    })
})
