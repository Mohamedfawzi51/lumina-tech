"use client";

import { useLocale } from "@/contexts/LocaleContext";
import { useDemo } from "@/contexts/DemoContext";
import { Icon } from "@/components/Icon";

const orderKeys = ["order1", "order2"] as const;
const orderIcons = ["laptop_mac", "smartphone"] as const;
const orderStatusStyles: Record<string, string> = {
  Shipped: "bg-primary/10 text-primary border-primary/20",
  Delivered: "bg-green-500/10 text-green-400 border-green-500/20",
  "تم الشحن": "bg-primary/10 text-primary border-primary/20",
  "تم التسليم": "bg-green-500/10 text-green-400 border-green-500/20",
};

export function RecentOrders() {
  const { messages } = useLocale();
  const { recentOrders } = messages.dashboard;
  const { demo } = messages;
  const { columns } = recentOrders;
  const { showToast } = useDemo();

  function openOrder(id: string) {
    showToast(demo.orderDetails.replace("{id}", id), "info");
  }

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-headline-lg text-headline-lg text-on-surface">
          {recentOrders.title}
        </h3>
        <button
          type="button"
          onClick={() => showToast(demo.orderDetails.replace("{id}", "all"), "info")}
          className="text-primary font-label-md flex items-center gap-2 hover:underline"
        >
          {recentOrders.viewAll}
          <Icon icon="arrow_forward" className="text-sm rtl:rotate-180" size={16} />
        </button>
      </div>

      <div className="glass-panel rounded-3xl overflow-x-auto">
        <table className="w-full text-start border-collapse min-w-[640px]">
          <thead className="bg-surface-container-high">
            <tr>
              <th className="p-6 font-label-md text-on-surface-variant uppercase tracking-widest text-xs">
                {columns.orderId}
              </th>
              <th className="p-6 font-label-md text-on-surface-variant uppercase tracking-widest text-xs">
                {columns.status}
              </th>
              <th className="p-6 font-label-md text-on-surface-variant uppercase tracking-widest text-xs">
                {columns.date}
              </th>
              <th className="p-6 font-label-md text-on-surface-variant uppercase tracking-widest text-xs text-end">
                {columns.total}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/20">
            {orderKeys.map((key, index) => {
              const order = recentOrders.items[key];
              const statusClass =
                orderStatusStyles[order.status] ??
                "bg-primary/10 text-primary border-primary/20";

              return (
                <tr
                  key={key}
                  onClick={() => openOrder(order.id)}
                  onKeyDown={(e) => e.key === "Enter" && openOrder(order.id)}
                  role="button"
                  tabIndex={0}
                  className="hover:bg-surface-variant/30 transition-colors group cursor-pointer"
                >
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-surface-container overflow-hidden p-2 flex items-center justify-center shrink-0">
                        <Icon
                          icon={orderIcons[index]}
                          className={
                            index === 0 ? "text-primary" : "text-secondary"
                          }
                        />
                      </div>
                      <div>
                        <p className="font-label-md text-on-surface">
                          {order.id}
                        </p>
                        <p className="text-xs text-on-surface-variant">
                          {order.items}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-label-sm border ${statusClass}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-6 text-on-surface-variant text-sm">
                    {order.date}
                  </td>
                  <td className="p-6 text-end font-label-md text-on-surface">
                    {order.total}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
