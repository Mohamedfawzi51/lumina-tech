import {
  ArrowLeft,
  ArrowRight,
  AtSign,
  Banknote,
  BatteryCharging,
  Bell,
  Boxes,
  Camera,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  CircleHelp,
  CircleUser,
  Cpu,
  CreditCard,
  FolderX,
  Gamepad2,
  Globe,
  Grid2x2,
  Heart,
  Languages,
  Laptop,
  LayoutDashboard,
  Lock,
  LogOut,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  Monitor,
  Moon,
  Network,
  Nfc,
  Package,
  Plus,
  Quote,
  Search,
  Settings,
  Share2,
  Shield,
  ShieldAlert,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Star,
  StarHalf,
  Sun,
  Trash2,
  Truck,
  User,
  Wallet,
  Zap,
  Factory,
  Leaf,
  Users,
  Award,
  Phone,
  MessageSquare,
  Mic,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  language: Languages,
  shopping_cart: ShoppingCart,
  menu: Menu,
  favorite: Heart,
  account_circle: CircleUser,
  search: Search,
  chevron_right: ChevronRight,
  chevron_left: ChevronLeft,
  arrow_forward: ArrowRight,
  add_shopping_cart: ShoppingCart,
  format_quote: Quote,
  star: Star,
  star_half: StarHalf,
  star_outline: Star,
  public: Globe,
  alternate_email: AtSign,
  expand_more: ChevronDown,
  smartphone: Smartphone,
  folder_delete: FolderX,
  family_star: Gamepad2,
  shopping_bag: ShoppingBag,
  light_mode: Sun,
  dark_mode: Moon,
  memory: Cpu,
  display_settings: Monitor,
  camera: Camera,
  battery_charging_full: BatteryCharging,
  verified_user: ShieldCheck,
  inventory_2: Package,
  credit_card: CreditCard,
  account_balance_wallet: Wallet,
  contactless: Nfc,
  share: Share2,
  chat: MessageCircle,
  mail: Mail,
  lock: Lock,
  arrow_back: ArrowLeft,
  check_circle: CircleCheck,
  delete: Trash2,
  remove: Minus,
  add: Plus,
  local_shipping: Truck,
  shopping_cart_off: ShoppingCart,
  east: ArrowRight,
  help_outline: CircleHelp,
  hub: Network,
  auto_awesome: Sparkles,
  deployed_code: Boxes,
  apps: Grid2x2,
  payments: Banknote,
  shield_locked: Shield,
  gpp_maybe: ShieldAlert,
  dashboard: LayoutDashboard,
  location_on: MapPin,
  person: User,
  logout: LogOut,
  notifications: Bell,
  bolt: Zap,
  laptop_mac: Laptop,
  settings: Settings,
  precision_manufacturing: Factory,
  eco: Leaf,
  diversity_1: Users,
  workspace_premium: Award,
  energy_savings_leaf: Leaf,
  security: Shield,
  call: Phone,
  forum: MessageSquare,
  share_reviews: Share2,
  podcasts: Mic,
};

type IconProps = {
  icon: string;
  filled?: boolean;
  className?: string;
  size?: number;
};

export function Icon({ icon, filled, className = "", size }: IconProps) {
  const LucideComponent = iconMap[icon];

  if (!LucideComponent) {
    return null;
  }

  const sizeMatch = className.match(/text-\[(\d+)px\]/);
  const computedSize =
    size ?? (sizeMatch ? Number.parseInt(sizeMatch[1], 10) : 24);

  return (
    <LucideComponent
      size={computedSize}
      className={`shrink-0 ${className}`}
      fill={filled ? "currentColor" : "none"}
      strokeWidth={filled ? 0 : 2}
    />
  );
}

export { Icon as MaterialIcon };
