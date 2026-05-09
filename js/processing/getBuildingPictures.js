class GetBuildingPictures {

    static getBuildingPictures(node) {
        const buildingPictures = {

            'First Gate': [
                { src: 'assets/buildings/First_Gate/First_Gate_1.webp', caption: 'First Gate Entrance' },
            ],

            'Second Gate': [
                { src: 'assets/buildings/Second_Gate/Second_Gate_1.webp', caption: 'Second Gate Entrance' },
            ],

            'Back Gate': [
                { src: 'assets/buildings/Back_Gate/Back_Gate_1.webp', caption: 'Back Gate Entrance' },
            ],

            'School of Engineering (SOE)': [
                { src: 'assets/buildings/School_of_Engineering/SOE_1.webp', caption: 'Front Entrance' }
            ],

            'School of Computing and Information Technology (SCIT)': [
                { src: 'assets/buildings/School_of_Computing_and_Information_Technology/SCIT_1.webp', caption: 'Front Entrance' }
            ],

            'College of Health Sciences (COHS)': [
                { src: 'assets/buildings/College_of_Health_Sciences/COHS_1.webp', caption: 'Coming from FOBE/Round about' },
                { src: 'assets/buildings/College_of_Health_Sciences/COHS_2.webp', caption: 'Coming from Library' }
            ],

            'Faculty of Built Environment (FOBE)': [
                { src: 'assets/buildings/Faculty_of_Built_Environment/FOBE_1.webp', caption: 'Front Entrance' }
            ],

            'School of Business Administration (SOBA)': [
                { src: 'assets/buildings/School_of_Business_Administration/SOBA_1.webp', caption: 'Front Entrance' }
            ],

            'College of Business and Management (COBAM)': [
                { src: 'assets/buildings/College_of_Business_Management/COBAM_1.webp', caption: 'Front Entrance' }
            ],

            'Faculty of Sports and Science (FOSS)': [
                { src: 'assets/buildings/Faculty_of_Sports_and_Science/FOSS_1.webp', caption: 'Front Entrance' }
            ],

            'Faculty of Education and Liberal Studies (FELS)': [
                { src: 'assets/buildings/Faculty_of_Education_and_Liberal_Studies/FELS_1.webp', caption: 'Coming from the front of the Campus' },
                { src: 'assets/buildings/Faculty_of_Education_and_Liberal_Studies/FELS_2.webp', caption: 'Coming from Shared Facilities' },
                { src: 'assets/buildings/Faculty_of_Education_and_Liberal_Studies/FELS_3.webp', caption: 'Coming from Sculpture Park' },
                { src: 'assets/buildings/Faculty_of_Education_and_Liberal_Studies/FELS_4.webp', caption: 'Coming from SCIT/SOE' },
            ],

            'Main Administration Building': [
                { src: 'assets/buildings/Main_Administration_Building/ADMIN_1.webp', caption: 'Front Entrance' }
            ],

            'Student Union Business Office': [
                { src: 'assets/buildings/Student_Union_Business_Office/SUBO_1.webp', caption: 'Front Entrance' },
            ],

            'Nursing Department': [
                { src: 'assets/buildings/Nursing_Department/NURS_1.webp', caption: 'Front Entrance' },
            ],

            'School of Hospitality and Tourism Management (SHTM)': [
                { src: 'assets/buildings/School_of_Hospitality_and_Tourism_Management/SHTM_1.webp', caption: 'Coming from Sculpture Park' },
                { src: 'assets/buildings/School_of_Hospitality_and_Tourism_Management/SHTM_2.webp', caption: 'Coming from BK' },
            ],

            'Computing and Engineering Entrepreneurial Centre (CEEC)': [
                { src: 'assets/buildings/Computing_and_Engineering_Entrepreneurial_Centre/CEEC_1.webp', caption: 'Front Entrance' }
            ],

            'Shared Facilities': [
                { src: 'assets/buildings/Shared_Facilities/SHARED_1.webp', caption: 'Front Entrance' }
            ],

            'Drawing Room': [
                { src: 'assets/buildings/Drawing_Room/DRAW_1.webp', caption: 'Drawing Room' },
            ],

            'Chapel': [
                { src: 'assets/buildings/Chapel/CHAPEL_1.webp', caption: 'Front Entrance' }
            ],

            'Auditorium': [
                { src: 'assets/buildings/Auditorium/AUD_1.webp', caption: 'Front Entrance' }
            ],

            'Calvin McKain Library': [
                { src: 'assets/buildings/Calvin_McKain_Library/LIB_1.webp', caption: 'Front Entrance' }
            ],

            'Faculty of Law (FOL)': [
                { src: 'assets/buildings/Faculty_of_Law/LAW_1.webp', caption: 'Front Entrance' }
            ],

            'Andrea Groceries': [
                { src: 'assets/buildings/Andrea_Groceries/ANDREA_1.webp', caption: 'Storefront' },
            ],

            'The Barn - UTech Student Activity Centre': [
                { src: 'assets/buildings/The_Barn/BARN_1.webp', caption: 'Front Entrance' },
                { src: 'assets/buildings/The_Barn/BARN_2.webp', caption: 'Under the shed' },
            ],

            'Hotel': [
                { src: 'assets/buildings/Hotel/HOTEL_1.webp', caption: 'Front Entrance' }
            ],

            'Burger King (BK)': [
                { src: 'assets/buildings/Burger_King/BK_1.webp', caption: 'Storefront' },
            ],

            'Juici Patties': [
                { src: 'assets/buildings/Juici_Patties/JP_1.webp', caption: 'Storefront' },
            ],

            'Office of Admissions and Enrolment Management': [
                { src: 'assets/buildings/Office_of_Admissions_and_Enrolment_Management/OAEM_1.webp', caption: 'Front Entrance'}
            ],

            'Student Services Building': [
                { src: 'assets/buildings/Student_Services_Building/SSB_1.webp', caption: 'Front Entrance' }
            ],

            'Sculpture Park': [
                { src: 'assets/buildings/Sculpture_Park/SCULPT_1.webp', caption: 'Sculpture Park' },
            ],

            'NCB': [
                { src: 'assets/buildings/NCB/NCB_1.webp', caption: 'Storefront' },
            ],

            'Scholarship Unit': [
                { src: 'assets/buildings/Scholarship_Unit/SCHOLAR_1.webp', caption: 'Front Entrance' },
            ],

        };

        return buildingPictures[node.name] ?? null;
    }

}

export { GetBuildingPictures };
