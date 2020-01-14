/**
 * A quick and functional API for the kids-wallet prototype.
 * You don't need to change any of this code
 */
import koa from 'koa';
import koaRouter from 'koa-router';
import koaBody from 'koa-bodyparser';
import uuid from 'node-uuid';

const app = new koa();
const router = new koaRouter();
const port = 8080;

app.use(koaBody());

router.get('/api/health-check', (ctx) => {
    ctx.response.status = 200;
    ctx.body = 'OK';
});

const tasks = [
    { title: 'Wash up after dinner', type: 'indoor', status: 'complete', value: '4.50', date: '2020-01-16' },
    { title: 'Lay the table', type: 'indoor', status: 'to_do', value: '2.00', date: '2020-01-20' },
    { title: 'Clean your bedroom', description: 'You need to tidy away all your CDs this time', type: 'indoor', status: 'to_do', value: '4.99', date: '2020-01-26' },
    { title: 'Hoover the landing', type: 'indoor', status: 'to_do', value: '3.00', date: '2020-01-27' },
    { title: 'Rake the leaves', description: 'You will find the rake in the shed', type: 'outdoor', status: 'to_do', value: '8.00', date: '2020-01-30' },
    { title: 'Take out the trash', type: 'trash', status: 'to_do', value: '2.25', date: '2020-01-31' },
    { title: 'Wash up after dinner', type: 'indoor', status: 'complete', value: '4.50', date: '2020-02-01' },
].map((task) => {
    const id = uuid();
    return {
        id,
        ...task,
        links: {
            update: `/api/tasks/${id}`
        },
    }
});

const activity = [
    { id: uuid(), title: 'Wash up after dinner', amount: '4.50', link: '#' },
    { id: uuid(), title: 'Fortnite', amount: '-9.99', link: '#' },
];

const accountDetails = {
    name: 'Sean',
    avatarUri: '/Child.png',
    balance: '48.00',
    earned: '18',
    spent: '8',
    links: {
        self: '/api/account-details',
        tasks: '/api/tasks',
        activity: '/api/activity'
    }
};

router.get('/api/account-details', (ctx) => {
    ctx.body = {
        ...accountDetails,
        tasks_completed: tasks.filter((task) => task.status === 'complete').length,
        tasks_available: tasks.length
    };
});

router.get('/api/activity', (ctx) => {
    ctx.body = [...activity].reverse();
});

router.get('/api/tasks', (ctx) => {
    ctx.body = tasks;
});

router.patch('/api/tasks/:id', (ctx) => {
    const task = tasks.find((task) => task.id === ctx.params.id);

    if (!task) {
        ctx.throw(404);
    }

    if (!ctx.request.body || ctx.request.body.status !== 'complete') {
        ctx.throw(400);
    }

    if (task.status !== 'complete') {
        activity.push({ id: uuid(), title: task.title, amount: task.value, link: '#' });
        accountDetails.balance = (parseFloat(accountDetails.balance) + parseFloat(task.value)).toFixed(2);
    }

    task.status = 'complete';

    ctx.body = { success: true };
});


app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port }, () => {
    console.log(`🧪  listening on port http://localhost:${port}`);
});