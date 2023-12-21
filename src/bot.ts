import { Bot, Keyboard } from "grammy"
import { Menu } from "@grammyjs/menu";

const bot = new Bot("6881953136:AAFcznjeG_9_uZBtUDwzyBxaA3CmQcHEQXw")

// 创建一个简单的菜单。
const menu1 = new Menu("my-menu-identifier")
    .text("A", (ctx) => ctx.reply("You pressed A!")).row()
    .text("B", (ctx) => ctx.reply("You pressed B!"));

const menu2 = new Menu("movements")
    .text("^", (ctx) => ctx.reply("Forward!")).row()
    .text("<", (ctx) => ctx.reply("Left!"))
    .text(">", (ctx) => ctx.reply("Right!")).row()
    .text("v", (ctx) => ctx.reply("Backwards!"));

// 已启用通知的用户标识符集合。
const notifications = new Set();

function toggleNotifications(id) {
    if (notifications.has(id)) notifications.delete(id);
    else notifications.add(id);
}

const menu3 = new Menu("toggle")
    .text(
        (ctx) => ctx.from && notifications.has(ctx.from.id) ? "🔔" : "🔕",
        (ctx) => {
            toggleNotifications(ctx.from.id);
            ctx.menu.update(); // 更新菜单！
        },
    );
const main = new Menu("root-menu")
    .text("Welcome", (ctx) => ctx.reply("Hi!")).row()
    .submenu("Credits", "credits-menu");

const settings = new Menu("credits-menu")
    .text("Show Credits", (ctx) => ctx.reply("Powered by grammY"))
    .back("Go Back");

main.register(settings);

// 使其具有互动性。
bot.use(menu1);
bot.use(menu2);
bot.use(menu3);
bot.use(main);

bot.command("start", async (ctx) => {
    // 发送菜单。
    await ctx.reply("Check out this menu:", { reply_markup: menu1 });
});
bot.command("settings", async (ctx) => {
    // 发送菜单。
    await ctx.reply("Check out this menu:", { reply_markup: menu2 });
});
bot.command("help", async (ctx) => {
    // 发送菜单。
    await ctx.reply("Check out this menu:", { reply_markup: menu3 });
    await ctx.reply("Check out this menu:", { reply_markup: main });
});

const keyboard = new Keyboard()
    .text("Yes, they certainly are").row()
    .text("I'm not quite sure").row()
    .text("No. 😈")
    .resized()
    .oneTime()

bot.hears("yes", async (ctx) => {
    // 和消息一起发送 keyboard。
    await ctx.reply("check out this yes menu", {
        reply_markup: keyboard,
    });
});
bot.hears("no", async (ctx) => {
    // 和消息一起发送 keyboard。
    await ctx.reply("https://t.me/MiniDemoBot/test");
});
bot.start()