/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./assets/js/*.js"],
    theme: {
      container:{
        center: true,
        padding:{
          DEFAULT: "1rem",
        }
      },
      fontFamily:{
        publicSans: ["Public Sans", "sans-serif"],
        splineSans: ["Spline Sans", "sans-serif"],
        remix: ["remixicon"],
      },
      extend: {
        screens:{
          "2xl": "1320px",
        },
        colors:{
          primary: {
            DEFAULT: "#5F71FA",
            200: "#EFF1FE",
            300: "DFE3FE",
            400: "rgba(255, 255, 255, 0.40)",
            800: "rgba(239, 241, 254, 0.20)",
            900: "rgba(223, 227, 254, 0.60)",
          },
          secondary: {
            DEFAULT: "#FA5F71",
            100: "#16163D",
            200: "#121F2B",
          },
          heading: "#0A1244",
          gray:{
            DEFAULT: "#474747",
            100: "#A0A0A0",
            200: "#E2E2E2",
            300: "#E7E9EA",
            400: "#424B55",
            500: "#EEEEEE",
            600: "#F4F6FF",
            800: "#868686",
          },
          border:{
          }
        },
        backgroundImage:{
          grow: "linear-gradient(90deg, #FAF2F3 0%, #E4E6FA 100%)",
          instractor_gradint: "linear-gradient(180deg, #FEF4F6 -2.01%, #E8EAF5 100%)",
          blog_overlay: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 30.15%, rgba(12, 50, 27, 0.10) 57.77%, rgba(27, 17, 39, 0.40) 100%)",
          org_overlay: "linear-gradient(180deg, rgba(22, 22, 61, 0.00) 19.31%, rgba(22, 22, 61, 0.90) 100%)",
          main_hero: "url(../images/hero/main-bg.png)",
          counter_bg: "url(../images/hero/counter/counter-bg.png)",
          offer_elemt: "url(../images/top-courses/offter-interset.png)",
          cta_section: "url(../images/cta/cta-bg.png)",
          join_section: "url(../images/join-us/join-bg.png)",
          join_user_bg: "url(../images/join-us/user-bg.png)",
          inner_hero: "url(../images/hero/inner-hero-bg.png)",
          course_detail_hero: "url(../images/hero/course-detail-hero-bg.png)",
          blog_quote: "url(../images/blog/blog-detail/quote-bg.png)",
          org_card_bg: "url(../images/organization/organize-bg.png)",
          org_detail_bg: "url(../images/organization/organize-detail-bg.png)",
        },
        backgroundSize:{
          "100%": "100% 100%",
        },
        boxShadow:{
          "courseCard": "0px 16px 40px 0px rgba(8, 45, 30, 0.08)",
          "detail": "8px 8px 20px 0px rgba(13, 0, 65, 0.05)",
          "profile": "2px 6px 20px 0px rgba(13, 0, 65, 0.05)",
        }, 
        listStyleImage:{
          white_tick: "url(../images/icon/tick_white.png)",
        },
        fontSize:{
          22: "22px",
          28: "28px",
          32: "32px",
          42: "42px",
          44: "44px",
          54: "54px",
        },
        spacing:{
          18: "18px",
          30: "30px",
          60: "60px",
          130: "130px",
        },
        borderRadius:{
          10: "4px",
          10: "10px",
          20: "20px",
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
        },
        animation:{
          spin: "spin 3s linear infinite",
          fade: 'fadeIn 0.5s ease-in-out',
        },
      },
    },
    plugins: [],
  };
  