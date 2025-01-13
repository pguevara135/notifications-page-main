const unReadMessage = document.querySelectorAll('.unread');
const unread = document.getElementById('notification');
const markAll = document.getElementById('mark-all');

unread.innerText = unReadMessage.length;

unReadMessage.forEach((message) => {
    message.addEventListener('click', () => {
        message.classList.remove('unread');
        unread.innerText = unReadMessage.length;
        const newUnreadMessage = document.querySelectorAll('.unread');
        unread.innerText = newUnreadMessage.length;
    });
});

markAll.addEventListener('click', () => {
    unReadMessage.forEach((message) => {
        message.classList.remove('unread');
    });
    const newUnreadMessage = document.querySelectorAll('.unread');
    unread.innerText = newUnreadMessage.length;
})