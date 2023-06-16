const mapping: Record<string, string> = {
  gyms: 'gym',
  members: 'member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
