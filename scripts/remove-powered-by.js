// // Function to remove branch text
// function removeBranch() {
//   // Chỉ chạy khi đã load xong DOM
//   if (document.readyState === 'complete') {
//     const footer = document.querySelector('footer');
//     if (footer) {
//       const elements = footer.querySelectorAll('.flex.items-center.justify-between');
//       elements.forEach(el => {
//         if (el.textContent.includes('Powered by Mintlify')) {
//           el.remove();
//         }
//       });
//     }
//   } else {
//     // Nếu DOM chưa load xong, đợi sự kiện load
//     window.addEventListener('load', removeBranch);
//   }
// }

// // Chạy ngay và theo dõi các thay đổi
// if (typeof window !== 'undefined') {
//   // Chạy lần đầu
//   removeBranch();

//   // Theo dõi các thay đổi trong DOM
//   const observer = new MutationObserver(removeBranch);
//   observer.observe(document.body, {
//     childList: true,
//     subtree: true
//   });
// }