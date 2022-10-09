/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createMachine } from 'xstate';

type TrafficLightEvents = { type: 'NEXT' };

type TrafficLightStates = { value: 'red'; context: undefined };
{
	value: 'yellow';
	context: undefined;
}
{
	value: 'green';
	context: undefined;
}

export const trafficLightMachine = createMachine<
	undefined,
	TrafficLightEvents,
	TrafficLightStates
>({
	initial: 'red',
	id: 'traffic-light',
	states: {
		green: {
			on: { NEXT: 'yellow' },
		},
		yellow: {
			on: { NEXT: 'red' },
		},
		red: {
			on: { NEXT: 'green' },
		},
	},
});
