// // "use client";

// // import Link from "next/link";
// // import React from "react";
// // import { signOut, useSession } from "next-auth/react";

// // const links = [
// //   {
// //     id: 1,
// //     title: "Home",
// //     url: "/",
// //   },
// //   {
// //     id: 2,
// //     title: "Portfolio",
// //     url: "/portfolio",
// //   },
// //   {
// //     id: 3,
// //     title: "Blog",
// //     url: "/blog",
// //   },
// //   {
// //     id: 4,
// //     title: "About",
// //     url: "/about",
// //   },
// //   {
// //     id: 5,
// //     title: "Contact",
// //     url: "/contact",
// //   },
// //   {
// //     id: 6,
// //     title: "Login",
// //     url: "/dashboard/login",
// //   },
// //   {
// //     id: 7,
// //     title: "Dashboard",
// //     url: "/dashboard",
// //   },
// // ];

// // const Navbar = () => {
// //   const session = useSession();

// //   return (
// //     <div className="">
// //       <Link href="/" className="">
// //         lamamia
// //       </Link>
// //       <div className={links}>
// //         {links.map((link) => (
// //           <Link key={link.id} href={link.url} className={link}>
// //             {link.title}
// //           </Link>
// //         ))}
// //         {/* {session.status === "authenticated" && (
// //           <button className={styles.logout} onClick={signOut}>
// //             Logout
// //           </button>
// //         )} */}
// //         <button className="" onClick={signOut}>
// //           Logout
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar;

// "use client";
// import React, { useContext } from "react";
// import Link from "next/link";
// import AuthProvider from "../AuthProvider/AuthProvider";
// // আপনার AuthContext এর পাথ অনুযায়ী ইমপোর্ট করুন

// export default function Navbar() {
//   // AuthProvider থেকে ইউজার এবং লগআউট ফাংশন নিয়ে আসা
//   const { user, logOut } = AuthProvider;

//   const handleLogout = () => {
//     logOut()
//       .then(() => {
//         console.log("Logged out successfully");
//       })
//       .catch((error) => console.error(error));
//   };

//   return (
//     <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
//       <div className="container mx-auto px-6 h-20 flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-black text-slate-900">
//           CARE<span className="text-teal-600">GIVE</span>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="flex items-center gap-6">
//           <Link
//             href="/"
//             className="font-bold text-slate-600 hover:text-teal-600"
//           >
//             Home
//           </Link>

//           {/* কন্ডিশনাল রেন্ডারিং শুরু */}
//           {user ? (
//             /* --- যদি লগইন থাকে --- */
//             <>
//               <Link
//                 href="/my-bookings"
//                 className="font-bold text-slate-600 hover:text-teal-600"
//               >
//                 My Bookings
//               </Link>
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-50 text-red-600 px-5 py-2 rounded-xl font-bold hover:bg-red-100 transition-all"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             /* --- যদি লগইন না থাকে --- */
//             <>
//               <Link
//                 href="/login"
//                 className="font-bold text-slate-600 hover:text-teal-600"
//               >
//                 Login
//               </Link>
//               <Link
//                 href="/register"
//                 className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-teal-600 transition-all"
//               >
//                 Register
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";
import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react"; // নেক্সট-অথ এর হুক

export default function Navbar() {
  // সেশন থেকে ডাটা এবং স্ট্যাটাস বের করে আনা
  const { data: session, status } = useSession();

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black text-slate-900">
          CARE<span className="text-teal-600">GIVE</span>
        </Link>

        {/* Desktop Menu */}
        <div className="flex items-center">
          <Link
            href="/"
            className="font-bold text-slate-600 hover:text-teal-600"
          >
            Home
          </Link>

          {/* কন্ডিশনাল রেন্ডারিং শুরু */}
          {status === "authenticated" ? (
            /* --- যদি ইউজার লগইন থাকে --- */
            <>
              <Link
                href="/my-bookings"
                className="font-bold text-slate-600 hover:text-teal-600"
              >
                My Bookings
              </Link>

              <div className="flex items-center gap-3">
                {/* ইউজারের নাম বা ছবি দেখাতে চাইলে */}
                <span className="text-sm font-medium text-slate-500 hidden md:block">
                  Hi, {session?.user?.name?.split(" ")[0]}
                </span>

                <button
                  onClick={() => signOut({ callbackUrl: "/login" })}
                  className="bg-red-50 text-slate-900 px-5 py-2 rounded-xl font-bold hover:bg-red-100 transition-all"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            /* --- যদি লগইন না থাকে বা স্ট্যাটাস loading হয় --- */
            status !== "loading" && (
              <>
                <Link
                  href="/login"
                  className="font-bold text-slate-600 hover:text-teal-600"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-teal-600 transition-all"
                >
                  Register
                </Link>
              </>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
