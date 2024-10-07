
(function ($) {
	"use strict";

	////////////////////////////////////////////////////
	// 01. Header Sticky
	window.addEventListener("scroll", function(){
        var header = document.querySelector(".header__bottom"); 
        header.classList.toggle("sticky", window.scrollY > 0); 
    }); 


	////////////////////////////////////////////////////
	// 02. Mobile Menu Js
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});


	////////////////////////////////////////////////////
	// 03. Sidebar Js
	$(".tp-menu-toggle").on("click", function () {
		$(".tp-sidebar-menu").addClass("sidebar-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".close-sidebar").on("click", function () {
		$(".tp-sidebar-menu").removeClass("sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 04. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".tp-sidebar-menu").removeClass("sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 04. Search box Show
	$(".header-search-icon").on("click", function () {
		$(".searchbar-form").slideToggle(300);
	});

	

	// Calendar Events ========================
	let currentMonth = new Date().getMonth();
	let currentYear = new Date().getFullYear();
		
	const events = {
		"2024-10-01": [
		{ title: "Jet Ski Tour: Hyatt", time: "9:30 AM" },
		{ title: "Lunch at Beachside Cafe", time: "12:30 PM" }
		],
		"2024-10-02": [
		{ title: "Jet Ski Tour: Hyatt", time: "11:30 AM" },
		{ title: "Check-in at Resort", time: "10:30-11:00 AM" },
		{ title: "Sunset Yoga", time: "5:30 PM" }
		],
		"2024-10-03": [
		{ title: "Check-in", time: "8:30-9:00 AM" },
		{ title: "BOARDING TIME", time: "9:05 AM" },
		{ title: "Snorkeling Adventure", time: "2:00 PM" }
		],
		"2024-10-04": [
		{ title: "Hiking Expedition", time: "7:00 AM" },
		{ title: "Lunch at Mountain Top", time: "12:00 PM" },
		{ title: "Stargazing Event", time: "8:00 PM" }
		],
		"2024-10-05": [
		{ title: "Morning Beach Yoga", time: "6:30 AM" },
		{ title: "Island Hopping Tour", time: "10:00 AM" },
		{ title: "BBQ Dinner", time: "6:00 PM" }
		],
		"2024-10-06": [
		{ title: "Scuba Diving", time: "9:00 AM" },
		{ title: "Spa Appointment", time: "2:00 PM" },
		{ title: "Farewell Dinner", time: "7:00 PM" }
		],
		"2024-10-07": [
		{ title: "Departure", time: "10:00 AM" }
		],
		"2024-11-01": [
		{ title: "Wine Tasting Tour", time: "11:00 AM" },
		{ title: "Art Gallery Visit", time: "2:30 PM" }
		],
		"2024-11-05": [
		{ title: "Beach Volleyball", time: "3:00 PM" },
		{ title: "Private Dinner Cruise", time: "6:30 PM" }
		],
		"2024-11-10": [
		{ title: "Yoga Workshop", time: "8:00 AM" },
		{ title: "Chef's Table Experience", time: "7:00 PM" }
		],
		"2024-11-15": [
		{ title: "Mountain Biking", time: "9:00 AM" },
		{ title: "Dinner at Lakeside Restaurant", time: "6:30 PM" }
		],
		"2024-12-01": [
		{ title: "Winter Festival", time: "10:00 AM" },
		{ title: "Ice Skating", time: "1:30 PM" }
		],
		"2024-12-12": [
		{ title: "Ski Lessons", time: "9:00 AM" },
		{ title: "Hot Chocolate at Lodge", time: "3:00 PM" }
		],
		"2024-12-20": [
		{ title: "Holiday Market", time: "11:00 AM" },
		{ title: "Christmas Light Show", time: "6:00 PM" }
		],
		"2024-12-31": [
		{ title: "New Year's Eve Party", time: "9:00 PM" },
		{ title: "Fireworks Show", time: "11:59 PM" }
		],
		"2025-01-05": [
		{ title: "New Year Hike", time: "7:00 AM" },
		{ title: "Brunch at Mountain Cafe", time: "10:30 AM" }
		],
		"2025-01-14": [
		{ title: "City Walking Tour", time: "1:00 PM" },
		{ title: "Dinner at Rooftop Restaurant", time: "6:30 PM" }
		],
		"2025-01-25": [
		{ title: "Hot Air Balloon Ride", time: "5:00 AM" },
		{ title: "Wine & Dine Night", time: "7:00 PM" }
		],
		"2025-02-01": [
		{ title: "Valentine's Day Special Event", time: "7:00 PM" },
		{ title: "Couples Spa Day", time: "2:00 PM" }
		],
		"2025-02-10": [
		{ title: "Jazz Concert", time: "8:00 PM" },
		{ title: "Sushi Workshop", time: "4:00 PM" }
		],
		"2025-02-18": [
		{ title: "Art Museum Tour", time: "11:00 AM" },
		{ title: "Sunset Boat Ride", time: "5:30 PM" }
		],
		"2025-03-02": [
		{ title: "Spring Festival", time: "10:00 AM" },
		{ title: "Outdoor Movie Night", time: "7:00 PM" }
		]
	};

	function generateCalendar(month, year) {
		const calendarBody = document.getElementById('calendar-body');
		const monthYearDisplay = document.getElementById('month-year');
		const months = [
		"January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
		];
		
		monthYearDisplay.innerHTML = months[month] + ' ' + year;
		calendarBody.innerHTML = '';

		const firstDayOfMonth = new Date(year, month, 1).getDay();
		const daysInMonth = new Date(year, month + 1, 0).getDate();

		let date = 1;
		for (let i = 0; i < 6; i++) {
		const row = document.createElement('tr');
		for (let j = 0; j < 7; j++) {
			const cell = document.createElement('td');
			cell.classList.add = "t-d"
			if (i === 0 && j < firstDayOfMonth) {
			cell.innerHTML = '';
			} else if (date > daysInMonth) {
			break;
			} else {
			const formattedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
			cell.innerHTML = date;
			if (events[formattedDate]) {
				events[formattedDate].forEach(event => {
				const eventDiv = document.createElement('div');
				eventDiv.classList.add('event');
				eventDiv.id = 'event-show';
				eventDiv.innerHTML = `<a style="text-decoration: none;" href="booking-form.html"><span>${event.title}</span><span class="event-time">${event.time}</span></a>`;
				cell.appendChild(eventDiv);
				});
			}
			cell.addEventListener('click', () => {
				showMobileEvents(formattedDate);
			});
			date++;
			}
			row.appendChild(cell);
		}
		calendarBody.appendChild(row);
		}
	}

	function showMobileEvents(date) {
		const mobileEventsDiv = document.getElementById('mobile-events');
		mobileEventsDiv.innerHTML = '';

		if (events[date]) {
		events[date].forEach(event => {
			const eventDiv = document.createElement('div');
			eventDiv.classList.add('event');
			eventDiv.id = 'event-show'
			eventDiv.innerHTML = `<a style="text-decoration: none;" href="booking-form.html"><span>${event.title}</span><span class="event-time">${event.time}</span></a>`;
			mobileEventsDiv.appendChild(eventDiv);
		});
		} else {
		mobileEventsDiv.innerHTML = '<p>No events for this date.</p>';
		}
	}

	document.getElementById('prev-month').addEventListener('click', () => {
		currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
		currentYear = (currentMonth === 11) ? currentYear - 1 : currentYear;
		generateCalendar(currentMonth, currentYear);
	});

	document.getElementById('next-month').addEventListener('click', () => {
		currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
		currentYear = (currentMonth === 0) ? currentYear + 1 : currentYear;
		generateCalendar(currentMonth, currentYear);
	});

	generateCalendar(currentMonth, currentYear);

})(jQuery);


