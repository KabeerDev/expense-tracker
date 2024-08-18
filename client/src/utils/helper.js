import { ShoppingIcon, FoodIcon, TelephoneIcon, EntertainmentIcon, EducationIcon, BeautyIcon, SportsIcon, SocialIcon, TranportationIcon, ClothingIcon, CarIcon, LiquorIcon, CigaretteIcon, ElectronicsIcon, TravelIcon, HealthIcon, PetIcon, RepairIcon, HousingIcon, GiftIcon, DonateIcon, LotteryIcon, SnacksIcon, ChildIcon, VegetableIcon, FruitIcon, SalaryIcon, InvestmentsIcon, PartTimerIcon, AwardsIcon, } from "../assets";
import { getTime } from "./auth";

export const getName = (text) => {
    if (!text) return "";
    const words = text.split(' ');
    let name = "";
    if (words.length > 1) {
        name = words[0].charAt(0) + words[1].charAt(0);
    };
    name = text.substring(0, 2);
    return name.toUpperCase();
};

export const uppercaseFirst = (text) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.substring(1, text.length);
};

export const icon = (label, filter) => {
    const icons = [
        { key: 'shopping', value: ShoppingIcon, type: 'expense' },
        { key: 'food', value: FoodIcon, type: 'expense' },
        { key: 'telephone', value: TelephoneIcon, type: 'expense' },
        { key: 'entertainment', value: EntertainmentIcon, type: 'expense' },
        { key: 'education', value: EducationIcon, type: 'expense' },
        { key: 'beauty', value: BeautyIcon, type: 'expense' },
        { key: 'sports', value: SportsIcon, type: 'expense' },
        { key: 'social', value: SocialIcon, type: 'expense' },
        { key: 'transportation', value: TranportationIcon, type: 'expense' },
        { key: 'clothing', value: ClothingIcon, type: 'expense' },
        { key: 'car', value: CarIcon, type: 'expense' },
        { key: 'liquor', value: LiquorIcon, type: 'expense' },
        { key: 'cigarette', value: CigaretteIcon, type: 'expense' },
        { key: 'electronics', value: ElectronicsIcon, type: 'expense' },
        { key: 'travel', value: TravelIcon, type: 'expense' },
        { key: 'health', value: HealthIcon, type: 'expense' },
        { key: 'pet', value: PetIcon, type: 'expense' },
        { key: 'repair', value: RepairIcon, type: 'expense' },
        { key: 'housing', value: HousingIcon, type: 'expense' },
        { key: 'gift', value: GiftIcon, type: 'expense' },
        { key: 'donate', value: DonateIcon, type: 'expense' },
        { key: 'lottery', value: LotteryIcon, type: 'expense' },
        { key: 'snacks', value: SnacksIcon, type: 'expense' },
        { key: 'child', value: ChildIcon, type: 'expense' },
        { key: 'vegetable', value: VegetableIcon, type: 'expense' },
        { key: 'fruit', value: FruitIcon, type: 'expense' },
        { key: 'salary', value: SalaryIcon, type: 'income' },
        { key: 'investments', value: InvestmentsIcon, type: 'income' },
        { key: 'part-timer', value: PartTimerIcon, type: 'income' },
        { key: 'awards', value: AwardsIcon, type: 'income' },
    ];

    if (label) {
        let r_icon = "";
        icons.map(item => {
            if (item.key == label.toLowerCase()) {
                r_icon = item.value;
            };
        });
        return r_icon;
    } else {
        if (!filter) return '';
        const f_icons = icons.filter(item => { return item.type == filter });
        return f_icons;
    };
};

export const filterRecords = (filter, data, value) => {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let info = [];
    let expenses = 0;
    let income = 0;
    if (filter == "date") {
        const date = monthNames[value.$M] + " " + value.$D + "," + " " + value.$y;
        info = data.filter(item => {
            return item.date == date;
        });
    } else if (filter == "year") {
        info = data.filter(item => {
            const [m, d, y] = item.date.split(" ");
            return y == value.$y;
        });
    } else {
        const date = monthNames[value.$M] + " " + value.$y;
        info = data.filter(item => {
            const [m, _, y] = item.date.split(" ");
            return m + " " + y == date;
        });
    };
    info.forEach(expense => {
        if (expense.type == "income") {
            income += parseInt(expense.amount);
        } else if (expense.type == "expense") {
            expenses += parseInt(expense.amount);
        }
    });
    let balance = income - expenses;
    if (balance < 1) {
        balance = 0;
    };
    return { expenses, income, balance, info };
};

export const compareTime = () => {
    const time = getTime();
    const timeInMilli = Date.now() - parseInt(time, 10);
    const timeInHours = timeInMilli / (1000 * 60 * 60);
    return timeInHours;
};

export const char_length = (text = "", length) => {
    if (text.length == 0) return "";
    if (length <= text.length) return text;
    const i = text.indexOf(" ", length);
    return text.substring(0, i + 1);
};